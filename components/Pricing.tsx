const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for solo work and trying things out.",
    features: ["Up to 3 projects", "Unlimited tasks", "Basic integrations", "Community support"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/user/month",
    description: "For growing teams that need more power.",
    features: ["Unlimited projects", "Real-time collaboration", "Advanced integrations", "Priority support", "Smart insights and reports"],
    cta: "Start 14-day trial",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$29",
    period: "/user/month",
    description: "For organizations that need security and control.",
    features: ["Everything in Pro", "SSO and SAML", "Audit logs", "Dedicated account manager", "99.99% uptime SLA"],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, honest pricing.</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Start free. Upgrade when you are ready. Cancel anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const cardClass = tier.highlighted
              ? "p-8 rounded-2xl border transition relative border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/20 shadow-xl scale-105"
              : "p-8 rounded-2xl border transition relative border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900";
            const btnClass = tier.highlighted
              ? "block text-center px-6 py-3 rounded-lg font-medium mb-6 transition bg-indigo-600 text-white hover:bg-indigo-700"
              : "block text-center px-6 py-3 rounded-lg font-medium mb-6 transition border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800";
            return (
              <div key={tier.name} className={cardClass}>
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full">
                    Most popular
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{tier.price}</span>
                  <span className="text-zinc-500">{tier.period}</span>
                </div>
                <a href="#contact" className={btnClass}>
                  {tier.cta}
                </a>
                <ul className="space-y-3">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <span className="text-indigo-600 mt-0.5">✓</span>
                      <span className="text-zinc-700 dark:text-zinc-300">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}