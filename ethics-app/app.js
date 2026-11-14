const FRAMEWORKS = [
  {
    id: "kant",
    name: "Kantianism",
    tagline: "Duty above all — the act itself is what matters.",
    color: "var(--kant)",
    thinker: "Immanuel Kant (1724–1804)",
    summary:
      "Kantianism is a deontological theory: some acts are right or wrong in themselves, regardless of their consequences. Kant argued that morality comes from duty and from following rules we could rationally want everyone to follow.",
    coreIdea:
      "Act only according to a rule (a 'maxim') that you can at the same time will to become a universal law. If you can't honestly wish that everyone always acted on your rule, it isn't moral.",
    principles: [
      "The Categorical Imperative: act only on maxims you can will as universal law.",
      "Treat humanity always as an end in itself, never merely as a means — don't use people as tools.",
      "Morality is about duty and good will, not outcomes. A good will is good even if it fails.",
      "Lying, stealing and murder are wrong in all circumstances, because they can't be universalized.",
    ],
    example: {
      scenario: "A murderer asks at your door where your friend is hiding, so he can kill them.",
      verdict: "Kant says: never lie. Telling the truth is a perfect duty, even to save a life.",
      why: "A world where lying is universal destroys trust and communication itself, so lying can never be willed as a universal law.",
    },
    strengths: [
      "Protects human dignity — people can't be sacrificed for the greater good.",
      "Clear, consistent rules that apply equally to everyone.",
      "Takes moral seriousness seriously: intentions and principles matter.",
    ],
    critiques: [
      "Ignores consequences entirely, which can lead to grim outcomes.",
      "Conflicting duties (e.g. tell the truth vs. protect the innocent) are hard to resolve.",
      "The universal-law test can be gamed by phrasing maxims narrowly.",
    ],
  },
  {
    id: "util",
    name: "Utilitarianism",
    tagline: "The greatest good for the greatest number.",
    color: "var(--util)",
    thinker: "Jeremy Bentham (1748–1832) & John Stuart Mill (1806–1873)",
    summary:
      "Utilitarianism is a consequentialist theory: the morality of an act depends entirely on its outcomes. The right action is the one that produces the most happiness (or well-being) and the least suffering for everyone affected.",
    coreIdea:
      "Maximize overall utility — happiness, pleasure or well-being — across all people affected by the decision. Every person's happiness counts equally.",
    principles: [
      "Consequences are all that matter: judge acts by the happiness/unhappiness they cause.",
      "Everyone affected counts equally — no special weight for yourself or your friends.",
      "Act utilitarianism judges each act individually; rule utilitarianism follows rules that tend to maximize happiness.",
      "Mill distinguished higher pleasures (intellectual, moral) from lower ones (physical).",
    ],
    example: {
      scenario: "A murderer asks at your door where your friend is hiding, so he can kill them.",
      verdict: "A utilitarian would likely lie — saving a life creates far more happiness than the harm of one lie.",
      why: "Weighed by outcomes, the lie prevents a death and the wider damage that would follow, so it maximizes overall well-being.",
    },
    strengths: [
      "Grounds morality in real human well-being, not abstract rules.",
      "Flexible enough to handle complex, real-life dilemmas.",
      "Provides a practical way to compare options (Bentham's 'hedonic calculus').",
    ],
    critiques: [
      "Can justify harming innocents if the numbers seem to work out (e.g. scapegoating).",
      "Hard to measure and predict happiness accurately — consequences are uncertain.",
      "Demanding: it seems to require us to always maximize, with no room for personal life.",
    ],
  },
  {
    id: "situ",
    name: "Situation Ethics",
    tagline: "Rules are guidelines — love decides in the moment.",
    color: "var(--situ)",
    thinker: "Joseph Fletcher (1905–1991)",
    summary:
      "Situation Ethics was developed by the theologian Joseph Fletcher. It rejects both rigid legalism and antinomianism (having no rules at all): the only absolute is love (agape), and each situation must be judged on its own context.",
    coreIdea:
      "There is one absolute: love. The right action is whatever is the most loving thing to do in that specific situation — 'all you need is love.'",
    principles: [
      "Agape love — selfless, unconditional concern for others — is the only intrinsic good.",
      "Rules (like the Ten Commandments) are valid only insofar as they serve love; they can be broken.",
      "Decisions are made situationally, not by fixed law: context determines what love requires.",
      "Fletcher's four working principles: pragmatism, relativism, positivism, personalism.",
    ],
    example: {
      scenario: "A murderer asks at your door where your friend is hiding, so he can kill them.",
      verdict: "Situation Ethics says: if lying is the most loving act in this situation, then lie.",
      why: "Fletcher famously argued the commandments are not absolute — love, not the rule, decides. Protecting the innocent can outweigh 'do not lie.'",
    },
    strengths: [
      "Puts compassion and real people ahead of rigid rules.",
      "Handles each case on its merits instead of applying one-size-fits-all rules.",
      "Simple guiding question: 'What is the most loving response here?'",
    ],
    critiques: [
      "'Love' is vague — different people will disagree on what love requires.",
      "Without fixed rules, it can slide into whatever someone happens to want.",
      "Hard to predict or judge consistently; critics call it subjective.",
    ],
  },
  {
    id: "nat",
    name: "Natural Law",
    tagline: "Right actions align with our God-given nature and purpose.",
    color: "var(--nat)",
    thinker: "Thomas Aquinas (1225–1274), building on Aristotle",
    summary:
      "Natural Law theory holds that the universe has a rational order, and humans have a God-given nature with a purpose (telos). Moral rules are 'written on the heart' and can be discovered by reason — no revelation needed.",
    coreIdea:
      "Do good and avoid evil. Actions that fulfill our natural purposes (our telos) are good; actions that frustrate them are wrong.",
    principles: [
      "Primary precepts: preserve life, reproduce, educate children, live in society, worship God.",
      "Secondary precepts (e.g. 'do not murder', 'do not lie') follow from the primary ones by reason.",
      "The doctrine of double effect: an act with both good and bad effects can be morally permissible if the bad effect is not intended and is proportionate.",
      "Human law is valid only insofar as it agrees with natural law.",
    ],
    example: {
      scenario: "A murderer asks at your door where your friend is hiding, so he can kill them.",
      verdict: "Natural Law says: lying is wrong — speech exists to communicate truth, and lying frustrates that natural purpose.",
      why: "The precept 'live in society' requires honest communication, so 'do not lie' is a secondary precept. (Double effect may still allow withholding information in some cases.)",
    },
    strengths: [
      "Combines reason with moral absolutes — accessible to believers and non-believers alike.",
      "Gives clear guidance on many issues via primary and secondary precepts.",
      "Influenced modern human rights and international law thinking.",
    ],
    critiques: [
      "Assumes a fixed human 'nature' and purpose, which critics dispute.",
      "The jump from 'is' (what happens naturally) to 'ought' (what should happen) is contested.",
      "Can produce rigid conclusions on issues like contraception or sexuality.",
    ],
  },
];

const COMPARE_ROWS = [
  {
    label: "Core question",
    values: {
      kant: "Could I will my rule to become a universal law?",
      util: "Which option produces the most happiness for the most people?",
      situ: "What is the most loving thing to do in this situation?",
      nat: "Does this action fulfill our natural purpose (telos)?",
    },
  },
  {
    label: "What makes an act right",
    values: {
      kant: "A good will acting from duty, following universalizable rules.",
      util: "Its consequences — maximizing overall well-being and minimizing suffering.",
      situ: "Being the most loving (agape) response to the specific situation.",
      nat: "Accord with natural law: fulfilling the purposes built into human nature.",
    },
  },
  {
    label: "Role of rules",
    values: {
      kant: "Rules are absolute — the Categorical Imperative always applies.",
      util: "Rules are useful heuristics if they usually maximize happiness (rule utilitarianism).",
      situ: "Rules are only guidelines; love can override them case by case.",
      nat: "Natural law is universal; human laws must align with it.",
    },
  },
  {
    label: "View on consequences",
    values: {
      kant: "Irrelevant — outcomes never justify a wrong act.",
      util: "Everything — consequences are the only thing that matters.",
      situ: "Considered, but only as part of what love requires here.",
      nat: "Considered via double effect, but the act's nature still matters.",
    },
  },
  {
    label: "Lying to save a life",
    values: {
      kant: "Wrong — lying can never be universalized, whatever the outcome.",
      util: "Generally right — saving a life outweighs the harm of one lie.",
      situ: "Right if it is the most loving act in that situation.",
      nat: "Wrong — lying frustrates the natural purpose of speech.",
    },
  },
  {
    label: "Key thinker",
    values: {
      kant: "Immanuel Kant",
      util: "Bentham & Mill",
      situ: "Joseph Fletcher",
      nat: "Thomas Aquinas",
    },
  },
];

const QUIZ = [
  {
    question: "A lie would save an innocent life. What would a Kantian say?",
    options: [
      "Lie — the good outcome justifies it",
      "Never lie; duty forbids it regardless of consequences",
      "Lie only if it's the most loving option",
      "Ask whether lying fulfills the purpose of speech",
    ],
    answer: 1,
    explanation:
      "Kantianism is deontological: lying can never be willed as a universal law, so it's wrong even to save a life.",
  },
  {
    question: "Which of these frameworks is consequentialist — judging acts purely by their outcomes?",
    options: ["Kantianism", "Natural Law", "Utilitarianism", "Situation Ethics"],
    answer: 2,
    explanation:
      "Utilitarianism (Bentham, Mill) holds that only consequences matter: the right act maximizes happiness for the greatest number.",
  },
  {
    question: "Situation Ethics says the only absolute is…",
    options: ["Duty", "Happiness", "Natural purpose", "Love (agape)"],
    answer: 3,
    explanation:
      "Joseph Fletcher taught that agape — selfless, unconditional love — is the one absolute; everything else is decided by the situation.",
  },
  {
    question: "The 'primary precepts' of Natural Law (preserve life, reproduce, educate, live in society, worship God) belong to which thinker?",
    options: ["Immanuel Kant", "Thomas Aquinas", "John Stuart Mill", "Joseph Fletcher"],
    answer: 1,
    explanation:
      "Thomas Aquinas systematized Natural Law, deriving moral rules from the purposes (telos) built into human nature.",
  },
  {
    question: "A runaway trolley will kill 5 people unless you pull a lever diverting it to 1 person. A utilitarian would…",
    options: [
      "Refuse to act, since killing is always wrong",
      "Pull the lever — 1 death is less bad than 5",
      "Pull the lever only if it's the most loving choice",
      "Check whether pulling the lever fulfills your natural purpose",
    ],
    answer: 1,
    explanation:
      "Utilitarianism weighs outcomes: minimizing total deaths (1 instead of 5) maximizes overall well-being, so pulling the lever is right.",
  },
  {
    question: "Using a friend purely as a tool to get what you want violates which principle?",
    options: [
      "The greatest happiness principle",
      "Treat humanity as an end in itself, never merely as a means",
      "The doctrine of double effect",
      "The primary precepts",
    ],
    answer: 1,
    explanation:
      "Kant's second formulation of the Categorical Imperative forbids treating persons merely as means to your own ends.",
  },
  {
    question: "'What is the most loving thing to do here?' is the guiding question of…",
    options: ["Kantianism", "Utilitarianism", "Natural Law", "Situation Ethics"],
    answer: 3,
    explanation:
      "Situation Ethics replaces fixed rules with a single test: the most loving (agape) response in the concrete situation.",
  },
  {
    question: "The doctrine of double effect — allowing a bad side-effect if it isn't intended and is proportionate — is part of…",
    options: ["Utilitarianism", "Kantianism", "Natural Law", "Situation Ethics"],
    answer: 2,
    explanation:
      "Aquinas's Natural Law uses double effect to handle acts with mixed outcomes, e.g. self-defence where the attacker's death is an unintended side effect.",
  },
];

const app = document.getElementById("app");

function frameworkById(id) {
  return FRAMEWORKS.find((f) => f.id === id);
}

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const views = {
  home() {
    return `
      <section class="hero">
        <h1>Four ways to answer: <em>what is the right thing to do?</em></h1>
        <p>Explore Kantianism, Utilitarianism, Situation Ethics and Natural Law — their core ideas, their thinkers, and how they'd each handle the same dilemmas.</p>
      </section>
      <div class="grid">
        ${FRAMEWORKS.map(
          (f) => `
          <a class="card" style="--accent:${f.color}" href="#/learn/${f.id}">
            <h3>${f.name}</h3>
            <p class="tagline">${f.tagline}</p>
            <p class="thinker">${f.thinker}</p>
          </a>`
        ).join("")}
      </div>
      <div style="text-align:center; margin-top:36px;">
        <a class="btn" href="#/quiz">Test yourself — take the quiz</a>
      </div>`;
  },

  learn(id) {
    if (!id) {
      return `
        <h2 class="section-title">Learn the four frameworks</h2>
        <p class="section-sub">Pick one to read its core idea, principles, a classic dilemma, and the main criticisms.</p>
        <div class="grid">
          ${FRAMEWORKS.map(
            (f) => `
            <a class="card" style="--accent:${f.color}" href="#/learn/${f.id}">
              <h3>${f.name}</h3>
              <p class="tagline">${f.tagline}</p>
              <p class="thinker">${f.thinker}</p>
            </a>`
          ).join("")}
        </div>`;
    }
    const f = frameworkById(id);
    if (!f) return `<p>Unknown framework. <a href="#/learn">Back to all</a></p>`;
    return `
      <a class="back-link" href="#/learn">← All frameworks</a>
      <article class="detail" style="--accent:${f.color}">
        <div class="detail-header">
          <h2>${f.name}</h2>
          <span class="tagline">${f.tagline}</span>
        </div>
        <p><strong>Key thinker:</strong> ${f.thinker}</p>
        <h3>Summary</h3>
        <p>${f.summary}</p>
        <h3>Core idea</h3>
        <p>${f.coreIdea}</p>
        <h3>Key principles</h3>
        <ul>${f.principles.map((p) => `<li>${p}</li>`).join("")}</ul>
        <h3>Classic dilemma</h3>
        <div class="example-box">
          <p><strong>Scenario:</strong> ${f.example.scenario}</p>
          <p><strong>Verdict:</strong> ${f.example.verdict}</p>
          <p><strong>Why:</strong> ${f.example.why}</p>
        </div>
        <h3>Strengths</h3>
        <ul>${f.strengths.map((s) => `<li>${s}</li>`).join("")}</ul>
        <h3>Critiques</h3>
        <ul>${f.critiques.map((c) => `<li>${c}</li>`).join("")}</ul>
      </article>`;
  },

  compare() {
    const cols = FRAMEWORKS.map((f) => `<th style="color:${f.color}">${f.name}</th>`).join("");
    const rows = COMPARE_ROWS.map(
      (r) => `<tr><th>${r.label}</th>${FRAMEWORKS.map((f) => `<td>${esc(r.values[f.id])}</td>`).join("")}</tr>`
    ).join("");
    return `
      <h2 class="section-title">Compare the four frameworks</h2>
      <p class="section-sub">Same questions, four different answers — including the classic 'lying to save a life' dilemma.</p>
      <div class="compare-table-wrap">
        <table class="compare">
          <thead><tr><th></th>${cols}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  },

  quiz() {
    return `
      <h2 class="section-title">The Ethics Quiz</h2>
      <p class="section-sub">Eight questions mixing concepts and dilemmas. Pick an answer to see why it's right or wrong.</p>
      <p class="quiz-progress" id="quiz-progress">Question 1 of ${QUIZ.length} — score 0</p>
      <div id="quiz-container"></div>`;
  },
};

let quizState = { index: 0, score: 0, answered: false };

function renderQuizQuestion() {
  const q = QUIZ[quizState.index];
  quizState.answered = false;
  document.getElementById("quiz-progress").textContent =
    `Question ${quizState.index + 1} of ${QUIZ.length} — score ${quizState.score}`;
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <div class="quiz-question">
      <h3>${esc(q.question)}</h3>
      <div class="quiz-options">
        ${q.options
          .map(
            (opt, i) => `<button class="quiz-option" data-i="${i}">${esc(opt)}</button>`
          )
          .join("")}
      </div>
      <div id="quiz-feedback"></div>
    </div>`;
  container.querySelectorAll(".quiz-option").forEach((btn) => {
    btn.addEventListener("click", () => answerQuiz(parseInt(btn.dataset.i, 10)));
  });
}

function answerQuiz(i) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = QUIZ[quizState.index];
  const correct = i === q.answer;
  if (correct) quizState.score += 1;
  document.getElementById("quiz-progress").textContent =
    `Question ${quizState.index + 1} of ${QUIZ.length} — score ${quizState.score}`;
  document.querySelectorAll(".quiz-option").forEach((btn) => {
    const idx = parseInt(btn.dataset.i, 10);
    btn.disabled = true;
    if (idx === q.answer) btn.classList.add("correct");
    else if (idx === i) btn.classList.add("wrong");
  });
  const isLast = quizState.index === QUIZ.length - 1;
  document.getElementById("quiz-feedback").innerHTML = `
    <div class="quiz-explanation">
      ${correct ? "✅ Correct. " : "❌ Not quite. "}${esc(q.explanation)}
      <div><button class="btn" id="quiz-next">${isLast ? "See my score" : "Next question →"}</button></div>
    </div>`;
  document.getElementById("quiz-next").addEventListener("click", () => {
    if (isLast) renderQuizScore();
    else {
      quizState.index += 1;
      renderQuizQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

function renderQuizScore() {
  const total = QUIZ.length;
  const s = quizState.score;
  const message =
    s === total ? "Perfect! You've got a solid grip on all four frameworks. 🏆" :
    s >= total - 2 ? "Great job — just a couple to brush up on." :
    s >= total / 2 ? "Not bad! Revisit the lessons and try again." :
    "Tough round — the frameworks are subtle. Read the lessons and retake it!";
  document.getElementById("quiz-container").innerHTML = `
    <div class="quiz-score">
      <p style="color:var(--muted); margin:0;">Your score</p>
      <div class="big">${s} / ${total}</div>
      <p>${message}</p>
      <a class="btn" href="#/quiz" id="retake">Retake quiz</a>
      <a class="btn" style="background:var(--surface-2); color:var(--text); border:1px solid var(--line);" href="#/learn">Review the lessons</a>
    </div>`;
  document.getElementById("quiz-progress").textContent = `Finished — final score ${s} of ${total}`;
  document.getElementById("retake").addEventListener("click", (e) => {
    e.preventDefault();
    quizState = { index: 0, score: 0, answered: false };
    renderQuizQuestion();
  });
}

function setActiveNav(route) {
  document.querySelectorAll(".nav a").forEach((a) => {
    a.classList.toggle("active", a.dataset.route === route);
  });
}

function route() {
  const hash = location.hash || "#/home";
  const parts = hash.replace(/^#\//, "").split("/");
  const view = parts[0] || "home";
  setActiveNav(view);
  if (view === "learn") {
    app.innerHTML = views.learn(parts[1]);
  } else if (view === "quiz") {
    quizState = { index: 0, score: 0, answered: false };
    app.innerHTML = views.quiz();
    renderQuizQuestion();
  } else if (views[view]) {
    app.innerHTML = views[view]();
  } else {
    app.innerHTML = views.home();
  }
  window.scrollTo({ top: 0 });
}

window.addEventListener("hashchange", route);
route();
