# MedReview — USMLE Command Center

> **Track. Review. Conquer.**
> A free, offline-first USMLE study platform built for med students who need to close a score gap — not manage a subscription.

---

## What Is This?

MedReview is a complete study command center that runs entirely in your browser with zero server, zero account, and zero subscription. It covers the full pipeline: watch Pathoma videos → review high-yield flashcards → practice clinical vignettes → track your NBME/UWorld scores → generate a week-by-week study plan.

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

### 🔬 Pathoma Video Viewer
A dedicated viewer for all 19 Pathoma chapters (117 videos total).

- **Full top nav** with all 19 chapter pills — color-coded with green completion dots
- **Sidebar video list** per chapter with watched/unwatched checkmarks and per-chapter progress bar
- **HTML5 video player** with auto-advance to the next video in a chapter
- **Auto-mark watched** when you reach 80% through a video
- **Chapter slide PDFs** linked per chapter; full slides library modal (📑)
- **Main Pathoma.pdf** one click away in the nav bar
- **Global progress** tracker showing X / 117 videos watched across all chapters
- Keyboard shortcuts: `→`/`n` next, `←`/`p` prev, `w` toggle watched, `Esc` close modal
- Progress persisted in `localStorage` — never lose your place

### 🏠 Step-Aware Dashboard
The Command Center adapts to whichever exam you're preparing for.

- **Exam countdown** with urgency color (green → yellow → red as the date approaches)
- **Latest score vs. target** with gap indicator (▲/▼)
- **System priority bars** weighted by official USMLE exam content percentages
- **Flagged cards** quick-access list (jump straight to review)
- **Score trend mini-chart** — all NBME/UWorld/UWSA/Free120 scores plotted over time
- **Resource stack** — curated books and tools specific to the selected Step
- One-click navigation from any system bar to its Study Cards

### 🔄 Global Step Selector (Step 1 / Step 2 CK / Step 3)
A persistent pill selector in the header changes the entire app context:

| What changes | Step 1 | Step 2 CK | Step 3 |
|---|---|---|---|
| Dashboard title | Basic Sciences | Clinical Knowledge | Clinical Management |
| Content areas | 9 organ systems (USMLE weights) | IM, Surgery, OB/GYN, Peds, Psych | Ambulatory, Emergency, Biostats |
| Resource stack | First Aid, Pathoma, Sketchy, AnKing | OnlineMedEd, Case Files, AMBOSS CK | Kaplan Step 3, Master the Boards |

### 🎯 Practice Question Bank
High-yield USMLE Step 1-style clinical vignette questions.

- **60+ clinical vignettes** across all 9 organ systems, organized into 3 blocks of 20
- **Block selector** — practice Full Test, Block 1, Block 2, or Block 3
- **Full quiz flow** — click answer → instant reveal with correct/wrong color coding
- **Teaching point** for every question — concise, high-yield explanations
- **Results screen** — score circle (Excellent / Passing / Borderline / Needs Work), per-system performance bars
- **Review mode** — step through every question with answers and teaching points shown
- Session scores auto-saved to the Score Tracker as `Free120` entries

### 📊 Score Tracker
Log every practice assessment and visualize your trend.

| Score Type | What It Tracks |
|---|---|
| NBME CBSSA | Forms 25–32 |
| UWSA | UWSA 1, UWSA 2 |
| UWorld | Block % correct |
| Free 120 | Practice session scores |
| Other | Any custom assessment |

- SVG trend chart with a target score line
- Table with date, type, score, and notes
- Delete individual entries
- Latest score shown on the dashboard with gap-to-target indicator

### 🗓️ Study Schedule Generator
Enter your exam date, select 4–12 dedicated weeks, and get a phase-by-phase plan.

| Phase | Focus |
|---|---|
| Foundation | Pathoma + First Aid baseline coverage |
| Integration | UWorld first pass + Sketchy |
| Drilling | UWorld second pass, weak systems |
| Consolidation | NBMEs, Free 120, final review |

### 📚 Rich Flashcard System
Pre-loaded with curated high-yield cards organized by the 9 official USMLE Step 1 organ systems.

| System | Exam Weight |
|---|---|
| Reproductive & Endocrine | 12–16% |
| Respiratory & Renal | 11–15% |
| Behavioral Health & Nervous | 10–14% |
| Blood & Lymphoreticular/Immune | 9–13% |
| Musculoskeletal & Skin | 8–12% |
| Multisystem Processes | 8–12% |
| Cardiovascular | 7–11% |
| Gastrointestinal | 6–10% |
| Human Development | 1–3% |

- **Rich text editor** — bold, italic, underline, bullet lists, numbered lists
- **Text highlighting** — select and mark key facts in yellow; highlights persist
- **Flag cards** for review (🚩) and access them from the dashboard
- **Slideshow mode** — full-screen active recall with keyboard/swipe navigation
- **Global search** — searches across all steps, categories, and cards simultaneously
- **Subcategory summaries** — editable overview panel per topic
- **JSON export/import** — back up your entire library in one click; restore on any device

---

## Getting Started

```bash
# Option 1: Open directly (Chrome, Safari, Edge, Firefox)
open medreview/index.html

# Option 2: Serve locally (required for Pathoma videos on some browsers)
cd medreview
python3 -m http.server 8080
# then open http://localhost:8080
```

> **Note for Pathoma:** Video playback requires serving via HTTP (not `file://`) in most browsers due to media MIME type restrictions. Use `python3 -m http.server` or any local server.

---

## File Structure

```
medreview/
├── index.html              — app shell (5 views + Pathoma link in nav)
├── css/
│   └── styles.css          — full styling, dark mode via [data-theme="dark"]
├── js/
│   ├── defaultData.js      — pre-loaded Step 1/2/3 content (v2.0)
│   ├── store.js            — localStorage state, migrations, all CRUD
│   ├── ui.js               — dark mode, sidebar, modals, toasts
│   ├── render.js           — DOM rendering (sidebar, card grid, summaries)
│   ├── editor.js           — rich text editor + Selection API highlighting
│   ├── slideshow.js        — fullscreen slideshow with keyboard & swipe
│   ├── search.js           — real-time global search
│   ├── io.js               — JSON export / import
│   ├── dashboard.js        — step-aware Command Center dashboard
│   ├── tracker.js          — score logging with SVG trend chart
│   ├── schedule.js         — 4–12-week study schedule generator
│   ├── practice.js         — 60+ clinical vignette question bank + quiz UI
│   └── app.js              — entry point, view switching, global step selector
└── pathoma/
    ├── index.html          — Pathoma video viewer (self-contained)
    ├── Pathoma.pdf         — main textbook
    ├── Slides/             — 20 chapter slide PDFs
    └── 01–19/              — 19 chapter folders, 117 MP4 videos total
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

Everything is stored locally in your browser's `localStorage` under `medreview_data`. Nothing is transmitted anywhere — no analytics, no tracking, no ads. Pathoma videos and PDFs are read directly from your local filesystem.

To back up: click **↓ Export** for a plain `.json` snapshot. Import it on any other device to restore everything instantly.

---

## Technical Details

Pure vanilla JavaScript — no framework, no build tools, no npm. Works via `file://` for the main app; serve via HTTP for Pathoma video playback.

**Browser requirements:** Chrome 80+, Firefox 75+, Safari 14+, Edge 80+. Requires `localStorage` and `crypto.randomUUID()`.

---

## License

MIT — free to use, modify, and distribute.

---

*Good luck on your boards. You've got this.*
