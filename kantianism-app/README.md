# Kantianism — An Interactive Primer

A dependency-free static web app for learning the core ideas of Immanuel Kant's
philosophy: the Copernican turn, synthetic a priori knowledge, phenomena vs.
noumena, duty and moral worth, the categorical imperative, and autonomy.

## Features

- **Lessons** — six short readings; mark each as read (progress persists in
  `localStorage` and is shown in the header progress bar).
- **Flashcards** — twelve key terms with click-to-reveal definitions.
- **Quiz** — eight multiple-choice questions with explanations and a final score.

## Run it

No build step. Serve the folder or just open `index.html` directly:

```sh
cd kantianism-app
python3 -m http.server 8000   # then open http://localhost:8000
# or simply: open index.html in a browser
```

## Verify

```sh
node --check app.js
node test.js
```

## Files

- `index.html` — page structure and views
- `styles.css` — styling
- `data.js` — lessons, flashcards, and quiz content (also loadable from Node)
- `app.js` — UI logic (tabs, lessons, flashcards, quiz, progress)
- `test.js` — content-integrity smoke test
