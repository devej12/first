const KANT_DATA = {
  lessons: [
    {
      id: "copernican-turn",
      title: "Kant and the Copernican Turn",
      body: [
        "Immanuel Kant (1724–1804) argued that the mind is not a passive receiver of experience: it actively structures it. Just as Copernicus showed the Earth is not the center of the cosmos, Kant proposed that objects of knowledge must conform to the structure of our cognition, not the other way around.",
        "This 'Copernican turn' is the starting point of his critical philosophy, developed in the Critique of Pure Reason (1781).",
      ],
    },
    {
      id: "synthetic-a-priori",
      title: "Synthetic a priori Knowledge",
      body: [
        "Kant divided judgments into analytic (the predicate is contained in the subject, e.g. 'all bachelors are unmarried') and synthetic (the predicate adds something new, e.g. 'all bodies have weight').",
        "He also distinguished a priori (independent of experience) from a posteriori (grounded in experience). His big claim: much of our knowledge — especially in mathematics and physics — is both synthetic and a priori, like '7 + 5 = 12'.",
        "The Critique asks: how is synthetic a priori knowledge possible? Answer: because the mind imposes its own forms (space, time) and categories (causality, substance) on experience.",
      ],
    },
    {
      id: "phenomena-noumena",
      title: "Phenomena and Noumena",
      body: [
        "Phenomena are things as they appear to us, structured by our forms of intuition and categories of understanding. Noumena are things as they are in themselves, independent of any possible experience.",
        "For Kant we can know phenomena but never noumena: every attempt to know the thing-in-itself applies categories that only work within experience. Ideas like God, the soul, and the world-as-a-whole are 'ideas of reason' — they cannot be known, only thought.",
      ],
    },
    {
      id: "duty-and-moral-worth",
      title: "Duty, Inclination, and Moral Worth",
      body: [
        "Kant's ethics is deontological: the moral worth of an action depends on the maxim (principle) behind it and whether it is done from duty, not on its consequences.",
        "An action done from inclination — even if it produces good results — has no moral worth. Only actions done from respect for the moral law count. As Kant puts it: moral worth lies in the fact that the action is done from duty, not from any expected outcome.",
      ],
    },
    {
      id: "categorical-imperative",
      title: "The Categorical Imperative",
      body: [
        "The categorical imperative is Kant's supreme principle of morality: act only according to that maxim by which you can at the same time will that it become a universal law.",
        "Its most famous formulation (the Formula of Humanity): act so that you treat humanity, whether in your own person or in that of another, always at the same time as an end, never merely as a means.",
        "Other formulations include the Formula of Universal Law, the Formula of Autonomy (act as if your maxim were legislating for the kingdom of ends), and the Formula of the Kingdom of Ends.",
      ],
    },
    {
      id: "autonomy-kingdom-of-ends",
      title: "Autonomy and the Kingdom of Ends",
      body: [
        "Autonomy — self-legislation — is for Kant the ground of human dignity. A rational being gives the moral law to itself; it is not ruled by external forces or inclinations. Heteronomy (rule by something else) is the opposite.",
        "The kingdom of ends is the imagined community of all rational beings, each legislating universal laws and treating every rational being as an end in itself. Morality, for Kant, is membership in this ideal kingdom.",
      ],
    },
  ],

  flashcards: [
    { term: "Categorical imperative", def: "Kant's supreme moral principle: act only on maxims you can will as universal law." },
    { term: "Maxim", def: "The subjective principle of willing — the rule an agent actually acts on." },
    { term: "Deontology", def: "Ethics based on duty and rules, not consequences; Kant's approach." },
    { term: "Synthetic a priori", def: "Knowledge that adds new information yet is independent of experience (e.g. '7 + 5 = 12')." },
    { term: "Analytic judgment", def: "A judgment whose predicate is contained in the subject ('all bachelors are unmarried')." },
    { term: "Phenomena", def: "Things as they appear to us, structured by space, time, and the categories." },
    { term: "Noumenon", def: "A thing as it is in itself, beyond possible experience — unknowable for Kant." },
    { term: "Autonomy", def: "Self-legislation: giving the moral law to oneself, the basis of dignity." },
    { term: "Heteronomy", def: "Being ruled by something external to reason, e.g. inclination or authority." },
    { term: "Kingdom of ends", def: "The ideal community of rational beings who treat each other always as ends, never merely as means." },
    { term: "Moral worth", def: "For Kant, possessed only by actions done from duty, not from inclination or for reward." },
    { term: "Formula of Humanity", def: "Treat humanity always at the same time as an end, never merely as a means." },
  ],

  quiz: [
    {
      q: "According to Kant, what makes an action morally worthy?",
      options: [
        "Its good consequences",
        "That it is done from duty",
        "That it follows social custom",
        "That it brings happiness",
      ],
      answer: 1,
      explain: "Only actions done from duty — out of respect for the moral law — have moral worth. Consequences and inclinations are morally irrelevant.",
    },
    {
      q: "'7 + 5 = 12' is, for Kant, an example of:",
      options: [
        "An analytic a priori judgment",
        "A synthetic a posteriori judgment",
        "A synthetic a priori judgment",
        "A synthetic a posteriori analytic judgment",
      ],
      answer: 2,
      explain: "It adds new information (synthetic) yet is known independently of experience (a priori).",
    },
    {
      q: "Why can we never know noumena, according to Kant?",
      options: [
        "Because our senses are too weak",
        "Because the categories of understanding only apply within experience",
        "Because noumena do not exist",
        "Because God hides them from us",
      ],
      answer: 1,
      explain: "Categories like causality are valid only for phenomena. Applying them to things-in-themselves is a misuse — a 'transcendental illusion'.",
    },
    {
      q: "The Formula of Humanity says we must:",
      options: [
        "Always tell the truth",
        "Treat humanity always as an end, never merely as a means",
        "Obey the laws of the land",
        "Maximize overall happiness",
      ],
      answer: 1,
      explain: "Respect for rational nature forbids using persons merely as tools for your own purposes.",
    },
    {
      q: "For Kant, autonomy means:",
      options: [
        "Doing whatever you want",
        "Self-legislation — giving the moral law to yourself through reason",
        "Living alone, apart from society",
        "Rejecting all moral rules",
      ],
      answer: 1,
      explain: "Autonomy is the ground of dignity: rational beings legislate the moral law for themselves, unlike heteronomy (rule by inclination or external authority).",
    },
    {
      q: "Kant's 'Copernican turn' claims that:",
      options: [
        "The Earth revolves around the Sun",
        "Objects of knowledge conform to the structure of our cognition",
        "Morality is based on feelings",
        "We can know things in themselves",
      ],
      answer: 1,
      explain: "Just as Copernicus displaced the Earth from the center, Kant displaced the passive mind: the mind actively structures experience.",
    },
    {
      q: "An action done from inclination but with good results has, for Kant:",
      options: [
        "Full moral worth",
        "Some moral worth",
        "No moral worth",
        "Negative moral worth",
      ],
      answer: 2,
      explain: "Moral worth requires acting from duty. Pleasant or useful actions done from inclination may be praiseworthy but are not morally worthy.",
    },
    {
      q: "The kingdom of ends is:",
      options: [
        "A country ruled by a philosopher-king",
        "The ideal community of rational beings legislating universal moral laws for each other",
        "Heaven",
        "The realm of phenomena",
      ],
      answer: 1,
      explain: "In the kingdom of ends, every rational being is both legislator and subject of the moral law, and each is treated as an end in itself.",
    },
  ],
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = KANT_DATA;
}
