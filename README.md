# MedReview — USMLE Command Center

> **Track. Review. Conquer.**
> A free, offline-first USMLE study platform built for med students who need to close a score gap — not manage a subscription.

---

## ⚠️ Content Disclaimer — Bring Your Own Files

MedReview is a **viewer and study tool only**. It does not include, distribute, or host any copyrighted content. You must supply your own legally-obtained copies of all course materials.

**Required files you must provide:**

| File / Folder | What It Is | Where to Place It |
|---|---|---|
| `pathoma/Pathoma.pdf` | Pathoma textbook (full book) | `pathoma/Pathoma.pdf` |
| `pathoma/Slides/` | Chapter slide PDFs (20 files) | `pathoma/Slides/Chapter 1 Cell Injury.pdf`, etc. |
| `pathoma/book/` | Per-chapter book PDFs for the Book viewer | `pathoma/book/ch1.pdf`, `ch2.pdf` … `ch19.pdf` |
| `pathoma/worksheets/` | Per-chapter interactive worksheets | `pathoma/worksheets/ch1.html`, `ch2.html` … (you create these) |
| `pathoma/01. Growth Adaptations.../` | Video files for Chapter 1 | One folder per chapter (see layout below) |
| `pathoma/02. … /` through `pathoma/19. … /` | Video files for Chapters 2–19 | Same pattern |

**Video filename format** (must match exactly):

```
pathoma/
└── 01. Growth Adaptations, Cellular Injury, and Cell Death/
    ├── 1.1 Growth Adaptations.mp4
    ├── 1.2 Cellular Injury.mp4
    ├── 1.3 Cell Death.mp4
    ├── 1.4 Free Radical Injury.mp4
    └── 1.5 Amyloidosis.mp4
```

Each video filename is `{id} {title}.mp4`. The app builds the path automatically — filenames must match the chapter folder names and video titles defined in `pathoma/index.html`.

> **Note:** Some videos that display as "(cont.)" in the UI (e.g. `2.1b Acute Inflammation (cont.)`) have the `(cont.)` stripped when resolving the filename — the actual file on disk should be named without it (e.g. `2.1b Acute Inflammation.mp4`).

---

## What Is This?

MedReview is a complete study command center that runs entirely in your browser with zero server, zero account, and zero subscription. It covers the full pipeline: watch Pathoma videos → review high-yield cue cards → practice clinical vignettes → track your NBME/UWorld scores → generate a week-by-week study plan.

Switch between Step 1, Step 2 CK, and Step 3 in one click. Everything — dashboard content, organ system weights, resources, and scheduled topics — adapts instantly.

---

## Who Is This For?

- **MS1 & MS2 students** building foundational knowledge for Step 1
- **MS3 students** grinding Step 2 CK during clerkships
- **Residents** squeezing Step 3 prep between overnight calls
- **Re-takers** who need a focused, distraction-free review system
- **Anyone** paying $50/month for a USMLE prep subscription

---

## Features

### 🔬 Pathoma Video Viewer (`pathoma/index.html`)

A dedicated viewer for all 19 Pathoma chapters (117 videos total).

- **Chapter nav bar** — 19 chapter pills with green completion dots
- **Sub-chapter bar** — per-chapter video pills with per-chapter progress bar
- **HTML5 video player** with auto-advance to the next video
- **Auto-mark watched** when you reach 80% through a video
- **Left sidebar** with two tabs:
  - **Slides** — chapter slide PDF embedded inline (custom PDF.js viewer, no thumbnail clutter)
  - **Book Chapter** — per-chapter book PDF (`pathoma/book/ch{N}.pdf`) embedded inline
  - Both panels are drag-resizable
- **Right cue card panel** — pre-loaded high-yield notes for every video, rendered as a rich-text editor:
  - Edits are auto-saved to `localStorage` and reloaded on next visit
  - Reset button restores the original pre-written notes
  - Panel is drag-resizable
- **My Notes view** — top-nav button opens a full review mode:
  - **My Edits tab** — only videos you have personally modified, grouped by chapter
  - **All Notes tab** — all 117 videos with full cue cards, grouped by chapter
  - Left chapter index panel (480px) with notes count per chapter and live scroll-spy
  - Every card is editable inline (same auto-save storage)
  - **▶ Watch** button on each card navigates directly to that video
- **Worksheets view** — top-nav button opens a per-chapter interactive worksheet viewer:
  - Left panel lists all 19 chapters — chapters with a worksheet show "Available", others show "Soon"
  - Clicking an available chapter loads `worksheets/ch{N}.html` in an embedded frame
  - Each worksheet contains: Study Guide · Flashcards (flip cards) · Practice Questions (vignettes with scoring, missed-question review, topic filtering) · Quick Reference tables
  - Worksheets are fully styled to match the app (dark theme, system fonts, 1.4rem base)
  - Add new worksheets by dropping `ch2.html` … `ch19.html` into `pathoma/worksheets/` and adding the chapter number to `WS_AVAILABLE` in `pathoma/index.html`
- **Global progress** tracker: X / 117 videos watched
- Keyboard shortcuts: `→`/`n` next, `←`/`p` prev, `w` toggle watched, `Esc` close modal
- Progress persisted in `localStorage`

### 🏠 Step-Aware Dashboard

The Command Center adapts to whichever exam you're preparing for.

- **Exam countdown** with urgency color (green → yellow → red)
- **Latest score vs. target** with gap indicator (▲/▼)
- **System priority bars** weighted by official USMLE content percentages
- **Flagged cards** quick-access list
- **Score trend mini-chart** — all scores plotted over time
- **Resource stack** — curated for the selected Step
- One-click navigation from any system bar to Study Cards

### 🔄 Global Step Selector (Step 1 / Step 2 CK / Step 3)

| What changes | Step 1 | Step 2 CK | Step 3 |
|---|---|---|---|
| Dashboard title | Basic Sciences | Clinical Knowledge | Clinical Management |
| Content areas | 9 organ systems (USMLE weights) | IM, Surgery, OB/GYN, Peds, Psych | Ambulatory, Emergency, Biostats |
| Resource stack | First Aid, Pathoma, Sketchy, AnKing | OnlineMedEd, Case Files, AMBOSS CK | Kaplan Step 3, Master the Boards |

### 🎯 Practice Question Bank

- **60+ clinical vignettes** across all 9 organ systems, 3 blocks of 20
- Full quiz flow with instant reveal and teaching points
- Results screen with per-system performance bars
- Session scores auto-saved to the Score Tracker

### 📊 Score Tracker

Log every practice assessment and visualize your trend (NBME CBSSA, UWSA, UWorld, Free 120, custom).

### 🗓️ Study Schedule Generator

Enter your exam date, select 4–12 dedicated weeks, get a phase-by-phase plan (Foundation → Integration → Drilling → Consolidation).

### 📚 Rich Flashcard System

Pre-loaded high-yield cards across all 9 Step 1 organ systems with rich text editor, text highlighting, flag system, slideshow mode, global search, and JSON export/import.

---

## Getting Started

```bash
# Option 1: Open the main app directly (Chrome, Safari, Edge, Firefox)
open medreview/index.html

# Option 2: Local HTTP server — required for Pathoma videos and PDF viewer
cd medreview
python3 -m http.server 8080
# then open http://localhost:8080
# Pathoma viewer: http://localhost:8080/pathoma/
```

> **Why HTTP?** The Pathoma module uses a custom PDF.js viewer (`pathoma/pdfviewer.html`) that loads PDFs via `fetch()`. Browsers block cross-origin `fetch()` from `file://` URLs. Serving via `http://localhost` removes this restriction and enables the no-thumbnail PDF viewer. Videos also benefit from proper MIME type handling over HTTP.
>
> The app still works on `file://` — PDFs fall back to Chrome's native viewer automatically — but HTTP gives the best experience.

---

## File Structure

```
medreview/
├── index.html                  — main app shell (dashboard, cards, tracker, schedule, practice)
├── css/
│   └── styles.css
├── js/
│   ├── defaultData.js
│   ├── store.js
│   ├── ui.js
│   ├── render.js
│   ├── editor.js
│   ├── slideshow.js
│   ├── search.js
│   ├── io.js
│   ├── dashboard.js
│   ├── tracker.js
│   ├── schedule.js
│   ├── practice.js
│   └── app.js
└── pathoma/
    ├── index.html              — Pathoma viewer (self-contained, all logic inline)
    ├── pdfviewer.html          — custom PDF.js viewer (no thumbnails, dark theme)
    ├── Pathoma.pdf             ← YOU PROVIDE THIS
    ├── Slides/                 ← YOU PROVIDE THIS (chapter slide PDFs)
    │   ├── Chapter 1 Cell Injury.pdf
    │   ├── Chapter 2 Inflammation.pdf
    │   └── … (one per chapter)
    ├── book/                   ← YOU PROVIDE THIS (per-chapter book PDFs)
    │   ├── ch1.pdf
    │   ├── ch2.pdf
    │   └── … ch19.pdf
    ├── worksheets/             — interactive per-chapter worksheets
    │   ├── ch1.html            — Chapter 1 (included: study guide, flashcards, 141 vignettes)
    │   ├── ch2.html            ← ADD AS AVAILABLE (register in WS_AVAILABLE in index.html)
    │   └── … ch19.html
    ├── 01. Growth Adaptations, Cellular Injury, and Cell Death/  ← YOU PROVIDE
    │   ├── 1.1 Growth Adaptations.mp4
    │   └── …
    ├── 02. Inflammation/       ← YOU PROVIDE
    └── … (19 chapter folders total)
```

---

## Keyboard Shortcuts

### Main App
| Shortcut | Action |
|---|---|
| `Ctrl/Cmd + S` | Save current card |
| `→` / `↓` | Next slide (slideshow) |
| `←` / `↑` | Previous slide (slideshow) |
| `Esc` | Close slideshow, search, or modal |

### Pathoma Viewer
| Shortcut | Action |
|---|---|
| `→` or `n` | Next video |
| `←` or `p` | Previous video |
| `w` | Toggle watched on current video |
| `Esc` | Close slides modal |

---

## Data & Privacy

Everything is stored locally in your browser's `localStorage`. Nothing is transmitted anywhere — no analytics, no tracking, no ads.

- Main app data key: `medreview_data`
- Pathoma watch progress: `pathoma_watched`
- Pathoma cue card edits: `pathoma_cue_edited`
- Panel sizes: `pathoma_panel_sizes`
- Worksheet state (flashcard position, practice scores): stored per-worksheet inside each `ch{N}.html` iframe's own localStorage scope

To back up: click **↓ Export** in the main app for a `.json` snapshot. Import it on any device to restore everything instantly.

---

## Technical Details

Pure vanilla JavaScript — no framework, no build tools, no npm. The main app works via `file://`; serve via HTTP for best Pathoma experience.

**Browser requirements:** Chrome 80+, Firefox 75+, Safari 14+, Edge 80+. Requires `localStorage` and `crypto.randomUUID()`.

---

## License

MIT — free to use, modify, and distribute. This tool does not include any Pathoma, First Aid, or other copyrighted educational content.

---

*Good luck on your boards. You've got this.*
