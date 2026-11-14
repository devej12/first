# Ethics Explorer

A small, dependency-free web app for learning four ethical frameworks:

- **Kantianism** — duty and universalizable rules (Immanuel Kant)
- **Utilitarianism** — the greatest good for the greatest number (Bentham & Mill)
- **Situation Ethics** — love decides in each situation (Joseph Fletcher)
- **Natural Law** — actions that fulfill our natural purpose (Thomas Aquinas)

## Run it

No build step needed. Either open `index.html` directly in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Features

- **Home / Learn** — a lesson per framework: summary, core idea, key principles, a classic dilemma (lying to save a life), strengths and critiques
- **Compare** — side-by-side table across core questions, including the shared dilemma
- **Quiz** — 8 scenario/concept questions with instant feedback and a final score

## Files

- `index.html` — page shell
- `styles.css` — styling
- `app.js` — content data, hash-based routing, quiz logic
