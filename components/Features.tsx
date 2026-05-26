const features = [
  {
    icon: "⚡",
    title: "Lightning fast",
    description: "Built on the edge. Pages load in under 100ms, anywhere in the world.",
  },
  {
    icon: "🎯",
    title: "Focus mode",
    description: "Block distractions and zero in on what matters most this week.",
  },
  {
    icon: "🤝",
    title: "Real-time sync",
    description: "See your team's updates live. No refresh, no waiting, no conflicts.",
  },
  {
    icon: "📊",
    title: "Smart insights",
    description: "Weekly reports show where your team's time actually goes.",
  },
  {
    icon: "🔌",
    title: "100+ integrations",
    description: "Connect with Slack, GitHub, Figma, Notion, and the tools you already use.",
  },
  {
    icon: "🔒",
    title: "Enterprise security",
    description: "SOC 2 compliant. SSO, audit logs, and granular permissions built in.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need.
            <br />
            <span className="text-zinc-500">Nothing you don't.</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Powerful features that get out of your way, so your team can ship faster.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg transition bg-white dark:bg-zinc-900"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}