# Learning Rust for C++ Engineers

A private, self-paced course for engineers who know basic C++ and are new to Rust.

- **22 lessons**
- **30-minute core path per lesson**
- **11 hours total**
- Hands-on projects: `rust-greeter` and Pulsewatch

The course progresses from variables, data modeling, control flow, ownership, and traits through concurrency, networking, SQLite, debugging, profiling, C++ migration, FFI, Kotlin/Java, and Swift.

## Preview locally

Clone the repository, then start the included local server.

### macOS or Linux

```bash
./serve.sh
```

### Windows PowerShell

```powershell
.\serve.ps1
```

Then open:

```text
http://127.0.0.1:8766/
```

Python 3 is the only preview-server prerequisite. The Rust and platform prerequisites used by individual lessons are listed in the course overview and each lesson's **Follow-along setup**.

## Repository layout

```text
index.html                  Course overview
01-*.html ... 22-*.html     Lesson pages
course.css                  Course-specific styles
assets/training.css         Shared standalone layout styles
assets/training.js          Navigation and mobile behavior
assets/*.svg                Rendered diagrams
assets/*.excalidraw         Editable diagram sources
```

## Editing

Keep every lesson's core agenda at exactly 30 minutes. When changing filenames or lesson order, update the overview cards, all sidebars, and previous/next navigation together.

This repository is intended for private team use.
