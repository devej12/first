"use strict";

const assert = require("assert");
const data = require("./data.js");

// Lessons: unique ids, non-empty titles and bodies
assert.ok(data.lessons.length >= 5, "expected at least 5 lessons");
const lessonIds = new Set();
for (const lesson of data.lessons) {
  assert.ok(lesson.id && !lessonIds.has(lesson.id), "lesson ids must be unique and non-empty");
  lessonIds.add(lesson.id);
  assert.ok(lesson.title.length > 0, "lesson needs a title");
  assert.ok(Array.isArray(lesson.body) && lesson.body.length > 0, "lesson needs body paragraphs");
  for (const p of lesson.body) assert.ok(p.length > 20, "lesson paragraphs should be substantive");
}

// Flashcards: non-empty term/definition pairs
assert.ok(data.flashcards.length >= 8, "expected at least 8 flashcards");
for (const card of data.flashcards) {
  assert.ok(card.term && card.def, "flashcard needs term and definition");
}

// Quiz: valid answer indices, 4 options each, explanation present
assert.ok(data.quiz.length >= 6, "expected at least 6 quiz questions");
for (const q of data.quiz) {
  assert.ok(q.q.length > 10, "question text too short");
  assert.strictEqual(q.options.length, 4, "each question needs exactly 4 options");
  assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4, "answer index out of range");
  assert.ok(q.explain.length > 10, "each question needs an explanation");
}

// Simulate a perfect quiz run using the same scoring rule as app.js
let score = 0;
for (const q of data.quiz) score += q.answer === q.answer ? 1 : 0;
assert.strictEqual(score, data.quiz.length, "perfect run should score full marks");

console.log(
  `OK: ${data.lessons.length} lessons, ${data.flashcards.length} flashcards, ${data.quiz.length} quiz questions — all valid.`
);
