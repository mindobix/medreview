#!/usr/bin/env python3
"""Local dev server for medreview.

The stdlib `python3 -m http.server` ignores HTTP Range requests, so
browsers can't seek <video> and Safari often refuses to start playback
on larger files. This handler is a drop-in replacement that honors
Range, which is what makes long Pathoma videos play reliably.

Usage:
    python3 serve.py            # port 8080
    python3 serve.py 9000       # custom port
"""
import http.server
import os
import re
import sys

_RANGE_RE = re.compile(r"bytes=(\d*)-(\d*)$")


class RangeHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        self.send_header("Accept-Ranges", "bytes")
        super().end_headers()

    def send_head(self):
        for h in ("If-Modified-Since", "If-None-Match"):
            if h in self.headers:
                del self.headers[h]

        rng = self.headers.get("Range")
        if not rng:
            return super().send_head()

        path = self.translate_path(self.path)
        if not os.path.isfile(path):
            return super().send_head()

        m = _RANGE_RE.match(rng.strip())
        if not m:
            return super().send_head()

        size = os.path.getsize(path)
        s, e = m.group(1), m.group(2)
        if s == "" and e == "":
            return super().send_head()
        if s == "":
            length = int(e)
            start = max(size - length, 0)
            end = size - 1
        else:
            start = int(s)
            end = int(e) if e else size - 1

        if start >= size or end < start:
            self.send_response(416)
            self.send_header("Content-Range", f"bytes */{size}")
            self.send_header("Content-Length", "0")
            self.end_headers()
            return None

        end = min(end, size - 1)
        length = end - start + 1

        try:
            f = open(path, "rb")
        except OSError:
            self.send_error(404, "File not found")
            return None
        f.seek(start)

        self.send_response(206)
        self.send_header("Content-Type", self.guess_type(path))
        self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.send_header("Content-Length", str(length))
        self.end_headers()
        self._range_remaining = length
        return f

    def copyfile(self, source, outputfile):
        remaining = getattr(self, "_range_remaining", None)
        if remaining is None:
            return super().copyfile(source, outputfile)
        buf = 64 * 1024
        try:
            while remaining > 0:
                chunk = source.read(min(buf, remaining))
                if not chunk:
                    break
                try:
                    outputfile.write(chunk)
                except (BrokenPipeError, ConnectionResetError):
                    break
                remaining -= len(chunk)
        finally:
            self._range_remaining = None
            try:
                source.close()
            except Exception:
                pass


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    server = http.server.ThreadingHTTPServer(("127.0.0.1", port), RangeHTTPRequestHandler)
    print(f"Serving http://127.0.0.1:{port}/  (Range supported)")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print()
        server.shutdown()


if __name__ == "__main__":
    main()
