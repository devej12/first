(function () {
  "use strict";

  var data = KANT_DATA;
  var STORAGE_KEY = "kantianism-progress-v1";

  function loadProgress() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var parsed = raw ? JSON.parse(raw) : {};
      return { read: parsed.read || [] };
    } catch (e) {
      return { read: [] };
    }
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      /* storage unavailable; progress stays in memory */
    }
  }

  var progress = loadProgress();

  function $(id) {
    return document.getElementById(id);
  }

  function showView(name) {
    document.querySelectorAll(".tab").forEach(function (tab) {
      tab.classList.toggle("active", tab.dataset.view === name);
    });
    document.querySelectorAll(".view").forEach(function (view) {
      view.classList.toggle("active", view.id === "view-" + name);
    });
  }

  function renderProgress() {
    var total = data.lessons.length;
    var done = progress.read.length;
    $("progress-label").textContent = done + " / " + total + " lessons read";
    $("progress-fill").style.width = total ? (done / total) * 100 + "%" : "0%";
  }

  /* ---------- Lessons ---------- */

  function renderLessonList() {
    var list = $("lesson-list");
    list.innerHTML = "";
    data.lessons.forEach(function (lesson, i) {
      var card = document.createElement("div");
      card.className = "lesson-card" + (progress.read.indexOf(lesson.id) !== -1 ? " read" : "");
      var title = document.createElement("h3");
      title.textContent = i + 1 + ". " + lesson.title;
      var badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = progress.read.indexOf(lesson.id) !== -1 ? "Read" : "Unread";
      card.appendChild(title);
      card.appendChild(badge);
      card.addEventListener("click", function () {
        openLesson(lesson.id);
      });
      list.appendChild(card);
    });
  }

  function openLesson(id) {
    var lesson = data.lessons.find(function (l) { return l.id === id; });
    if (!lesson) return;
    $("lesson-list").classList.add("hidden");
    $("lesson-detail").classList.remove("hidden");
    $("lesson-title").textContent = lesson.title;
    var body = $("lesson-body");
    body.innerHTML = "";
    lesson.body.forEach(function (para) {
      var p = document.createElement("p");
      p.textContent = para;
      body.appendChild(p);
    });
    var btn = $("mark-read");
    if (progress.read.indexOf(lesson.id) !== -1) {
      btn.textContent = "Read ✓";
      btn.disabled = true;
    } else {
      btn.textContent = "Mark as read";
      btn.disabled = false;
    }
    btn.onclick = function () {
      if (progress.read.indexOf(lesson.id) === -1) {
        progress.read.push(lesson.id);
        saveProgress(progress);
        renderProgress();
        renderLessonList();
        btn.textContent = "Read ✓";
        btn.disabled = true;
        var badge = document.querySelectorAll(".lesson-card .badge");
      }
    };
  }

  function initLessons() {
    $("back-to-list").addEventListener("click", function () {
      $("lesson-detail").classList.add("hidden");
      $("lesson-list").classList.remove("hidden");
      renderLessonList();
    });
    renderLessonList();
    renderProgress();
  }

  /* ---------- Flashcards ---------- */

  var cardIndex = 0;

  function renderCard() {
    var card = data.flashcards[cardIndex];
    $("card-term").textContent = card.term;
    $("card-def").textContent = card.def;
    $("card-counter").textContent = cardIndex + 1 + " / " + data.flashcards.length;
    $("flashcard-inner").classList.remove("flipped");
  }

  function initFlashcards() {
    $("flashcard").addEventListener("click", function () {
      $("flashcard-inner").classList.toggle("flipped");
    });
    $("prev-card").addEventListener("click", function () {
      cardIndex = (cardIndex - 1 + data.flashcards.length) % data.flashcards.length;
      renderCard();
    });
    $("next-card").addEventListener("click", function () {
      cardIndex = (cardIndex + 1) % data.flashcards.length;
      renderCard();
    });
    renderCard();
  }

  /* ---------- Quiz ---------- */

  var quizState = { index: 0, score: 0, answered: false };

  function startQuiz() {
    quizState = { index: 0, score: 0, answered: false };
    $("quiz-start").classList.add("hidden");
    $("quiz-result").classList.add("hidden");
    $("quiz-run").classList.remove("hidden");
    renderQuestion();
  }

  function renderQuestion() {
    var item = data.quiz[quizState.index];
    quizState.answered = false;
    $("quiz-progress").textContent = "Question " + (quizState.index + 1) + " of " + data.quiz.length;
    $("quiz-question").textContent = item.q;
    $("quiz-feedback").classList.add("hidden");
    $("quiz-next").classList.add("hidden");
    var box = $("quiz-options");
    box.innerHTML = "";
    item.options.forEach(function (opt, i) {
      var btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.textContent = opt;
      btn.addEventListener("click", function () {
        answerQuestion(i, btn);
      });
      box.appendChild(btn);
    });
  }

  function answerQuestion(i, btn) {
    if (quizState.answered) return;
    quizState.answered = true;
    var item = data.quiz[quizState.index];
    var buttons = document.querySelectorAll(".quiz-option");
    buttons.forEach(function (b, idx) {
      b.disabled = true;
      if (idx === item.answer) b.classList.add("correct");
    });
    var feedback = $("quiz-feedback");
    feedback.classList.remove("hidden");
    if (i === item.answer) {
      quizState.score += 1;
      feedback.textContent = "Correct! " + item.explain;
      feedback.className = "good";
    } else {
      btn.classList.add("wrong");
      feedback.textContent = "Not quite. " + item.explain;
      feedback.className = "bad";
    }
    $("quiz-next").classList.remove("hidden");
  }

  function nextQuestion() {
    quizState.index += 1;
    if (quizState.index >= data.quiz.length) {
      showResult();
    } else {
      renderQuestion();
    }
  }

  function showResult() {
    $("quiz-run").classList.add("hidden");
    $("quiz-result").classList.remove("hidden");
    var total = data.quiz.length;
    $("quiz-score").textContent = quizState.score + " / " + total;
    var ratio = total ? quizState.score / total : 0;
    var msg;
    if (ratio === 1) msg = "Perfect — you think like a true Kantian.";
    else if (ratio >= 0.7) msg = "Solid grasp of the essentials. Revisit the flashcards to sharpen it.";
    else if (ratio >= 0.4) msg = "A decent start — reread the lessons on duty and the categorical imperative.";
    else msg = "The moral law is subtle. Start again with the first lessons.";
    $("quiz-message").textContent = msg;
  }

  function initQuiz() {
    $("start-quiz").addEventListener("click", startQuiz);
    $("quiz-next").addEventListener("click", nextQuestion);
    $("restart-quiz").addEventListener("click", startQuiz);
  }

  /* ---------- Init ---------- */

  document.querySelectorAll(".tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      showView(tab.dataset.view);
    });
  });

  initLessons();
  initFlashcards();
  initQuiz();
})();
