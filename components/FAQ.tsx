"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How is TaskFlow different from Asana or Trello?",
    a: "TaskFlow is built for small teams who want speed over features. We strip out the bloat — no Gantt charts you'll never use, no 50-tab settings panel. Just tasks, projects, and your team, shipped in under 100ms.",
  },
  {
    q: "Can I try it before paying?",
    a: "Yes. The Starter plan is free forever for up to 3 projects. Pro has a 14-day free trial with no credit card required.",
  },
  {
    q: "Do you offer student or non-profit discounts?",
    a: "We offer 50% off Pro for verified students and free Pro accounts for registered non-profits. Just contact our team with proof of status.",
  },
  {
    q: "Where is my data stored? Is it secure?",
    a: "All data is encrypted at rest and in transit, stored in SOC 2 compliant data centers in the US and EU. You choose your region during signup.",
  },
  {
    q: "Can I import data from another tool?",
    a: "Yes. We support one-click imports from Asana, Trello, Notion, Jira, and CSV files. Most teams migrate in under 10 minutes.",
  },
  {
    q: "What happens if I cancel?",
    a: "You can export all your data anytime. After cancellation, your data is retained for 30 days in case you change your mind, then permanently deleted.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Can&apos;t find what you&apos;re looking for? Reach out below.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-900"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
                >
                  <span className="font-medium pr-4">{faq.q}</span>
                  <span
                    className={
                      "text-2xl text-zinc-400 transition-transform duration-200 " +
                      (isOpen ? "rotate-45" : "")
                    }
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}