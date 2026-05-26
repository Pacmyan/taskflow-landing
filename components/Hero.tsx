export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 text-xs font-medium bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-900">
          ✨ New: AI-powered task suggestions
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Get more done,
          <br />
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            without the chaos.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
          TaskFlow is the simplest way for small teams to plan, track, and ship work — together. No bloat. No learning curve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#contact" className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
            Start free trial
          </a>
          <a href="#features" className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 font-medium rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">
            See how it works
          </a>
        </div>
        <p className="text-sm text-zinc-500">
          Trusted by 10,000+ teams · No credit card required
        </p>
      </div>
    </section>
  );
}