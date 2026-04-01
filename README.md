# MedReview — Your Personal USMLE Study Companion

> **Study smarter. Not just harder.**
> A free, offline-first flashcard and annotation app built specifically for USMLE Step 1, Step 2 CK, and Step 3 preparation.

---

## Why MedReview?

Medical school is relentless. Between lectures, shelf exams, and clinical rotations, the last thing you need is a study tool that fights you — subscription paywalls, internet requirements, bloated interfaces, or content that doesn't match what's actually tested.

**MedReview was built by someone who understands that problem.**

It lives entirely in your browser, stores everything locally on your device, and ships pre-loaded with high-yield content organized exactly the way USMLE prep demands — by organ system, discipline, and exam step. No account. No subscription. No connection required. Just open and study.

---

## Who Is This For?

- **MS1 & MS2 students** building foundational knowledge for Step 1
- **MS3 students** grinding Step 2 CK while surviving clerkships
- **Residents** preparing for Step 3 between overnight calls
- **Re-takers** who need a cleaner, more focused review system
- **Anyone** who's tired of paying $50/month for a flashcard app

---

## Features

### Pre-Loaded High-Yield Content
Don't start from a blank page. MedReview ships with curated, exam-focused cards across all three steps:

| Step | Categories Included |
|------|-------------------|
| **Step 1** | Biochemistry & Genetics, Physiology, Pathology, Pharmacology, Microbiology & Immunology, Anatomy & Embryology, Cardiovascular, Behavioral Science & Biostatistics |
| **Step 2 CK** | Internal Medicine, Cardiology, OB/GYN, Pediatrics, Psychiatry, Surgery, Emergency Medicine |
| **Step 3** | Ambulatory Medicine, Inpatient Management, Emergency Management, Pharmacotherapy, Biostatistics & Epidemiology, Clinical Decision Making |

Every pre-loaded card is written to reflect what's **actually tested** — mnemonics, classic presentations, distinguishing features, and high-yield tables.

---

### Rich Text Editor with Highlighting
Your notes deserve more than plain text.

- **Format freely** — bold, italic, underline, bullet lists, numbered lists
- **Highlight key facts** — select any text and mark it in yellow. Highlights are saved permanently, so when you review a card later, the most important details jump out immediately
- **Remove highlights** selectively or clear them all with one click
- **Flag cards** for review — mark cards you're still shaky on with 🚩 and come back to them

---

### Slideshow Mode
When it's time to drill, switch to **Slideshow Mode** for any category.

- Full-screen, distraction-free card review
- Navigate with **arrow keys**, **on-screen buttons**, or **swipe gestures** on mobile
- Progress bar shows where you are in the deck
- Flag or edit cards without leaving the slideshow
- Great for last-minute review before an exam block

---

### Add Your Own Content
Pre-loaded content is just the starting point. MedReview is your personal notebook.

- **Add cards** to any existing category
- **Create new categories** with a custom name and icon
- **Edit any card** at any time — your edits are saved instantly
- **Delete cards or categories** you don't need
- Everything you add is yours, stored privately on your device

---

### Global Search
Can't remember which category a topic lives in? Just search.

- Searches across **all steps, all categories, all cards** simultaneously
- Highlights matching terms in search results
- Click any result to jump directly to that card and open it for editing

---

### Offline First — No Internet Required
MedReview is a local web app. Everything runs in your browser with zero server calls.

- Works on a plane, in the hospital, in the library basement with no WiFi
- No account creation, no email, no password
- Your data never leaves your device

---

### Backup & Restore
Study on multiple devices? Switching computers? Moving from laptop to tablet?

- **Export** your entire library — cards, highlights, categories, and all — as a single `.json` file in one click
- **Import** that file on any other device to restore everything exactly as you left it
- Human-readable backup format you can archive or version however you like
- Backup before big edits as your own "undo" safety net

---

### Dark Mode
Late-night study sessions are real. Toggle dark mode in one click for a comfortable low-light experience that won't wreck your eyes at 2 AM.

---

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + S` | Save current card |
| `→` / `↓` | Next slide (in slideshow) |
| `←` / `↑` | Previous slide (in slideshow) |
| `Esc` | Close slideshow or search |

---

## Getting Started

1. **Download or clone** the `medreview` folder to your computer
2. **Open `index.html`** in Chrome, Safari, Firefox, or Edge
3. That's it — no installation, no build step, no dependencies

> **Tip:** Bookmark the local file path in your browser for instant access every time you sit down to study.

---

## Data & Privacy

Your data is **100% local**. MedReview stores everything in your browser's `localStorage` under the key `medreview_data`. Nothing is transmitted anywhere. No analytics. No tracking. No ads.

To back up or transfer your data, use the **Export** button — it gives you a plain `.json` file you own completely.

---

## The Philosophy Behind MedReview

Most study apps are designed to keep you inside them — gamification, streaks, paywalls, "premium" content. That's not what this is.

MedReview is designed to **get out of your way**. Open it, find what you need, review it, close it. The goal is always the same: pass your boards, become a great physician.

The pre-loaded content follows the classic high-yield approach favored by First Aid, Pathoma, Sketchy, and Boards & Beyond — but the tool itself is yours to shape. Add your own mnemonics. Highlight the facts you always forget. Build the card deck that reflects *your* weaknesses, not a generic algorithm's guess.

---

## Technical Details

For the technically curious — MedReview is a single-page web app with no framework dependencies and no build process.

```
medreview/
├── index.html          — app shell
├── css/
│   └── styles.css      — full styling with CSS custom properties (dark mode)
└── js/
    ├── defaultData.js  — pre-loaded Step 1/2/3 content
    ├── store.js        — localStorage state management
    ├── ui.js           — dark mode, sidebar, modals, toasts
    ├── render.js       — DOM rendering (tabs, sidebar, card grid)
    ├── editor.js       — rich text editor + Selection API highlighting
    ├── slideshow.js    — fullscreen slideshow with keyboard & swipe
    ├── search.js       — real-time global search
    ├── io.js           — JSON export/import
    └── app.js          — entry point and event wiring
```

**Browser requirements:** Any modern browser (Chrome 80+, Firefox 75+, Safari 14+, Edge 80+). Requires `localStorage` and `crypto.randomUUID()` support — both universally available in modern browsers.

---

## Frequently Asked Questions

**Is this really free?**
Yes. No hidden costs, no freemium tier, no "pro" version. Free forever.

**Will I lose my data if I clear my browser cache?**
If you clear `localStorage`, yes. Export a backup first — it takes two seconds. Keep that `.json` file somewhere safe (Google Drive, Dropbox, email to yourself).

**Can I use this on my iPad or phone?**
Yes. The layout is functional on tablet screens. Swipe gestures work in slideshow mode. A fully responsive mobile layout is on the roadmap.

**Can I share my card deck with a study partner?**
Yes — export your backup `.json` and send it to them. They import it and instantly have your entire library.

**What if I want to add a whole new subject or system?**
Right-click any category in the sidebar to rename it, or use the **＋** button to add a new category with a custom name and emoji icon.

**Does this replace Anki or Sketchy?**
It's a complement, not a replacement. Use Sketchy for encoding, Anki for pure repetition volume, and MedReview for **annotated reference cards** — the cards you build from your weaknesses, flag for re-review, and flip through the night before an exam block.

---

## Roadmap

- [ ] Spaced repetition scheduling (SM-2 algorithm)
- [ ] Mobile-responsive layout
- [ ] Export deck as PDF for printing
- [ ] Import Anki `.apkg` decks
- [ ] Image support in cards
- [ ] Per-category progress tracking
- [ ] Timed quiz mode with score history

---

## License

MIT License — free to use, modify, and distribute. Attribution appreciated but not required.

---

*Good luck on your boards. You've got this.*
