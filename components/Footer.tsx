export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="font-bold text-xl mb-3">
              Task<span className="text-indigo-600">Flow</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              The simplest way for small teams to ship work together.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
              <li><a href="#pricing" className="hover:text-indigo-600">Pricing</a></li>
              <li><a href="#faq" className="hover:text-indigo-600">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="#" className="hover:text-indigo-600">About</a></li>
              <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="#" className="hover:text-indigo-600">Privacy</a></li>
              <li><a href="#" className="hover:text-indigo-600">Terms</a></li>
              <li><a href="#" className="hover:text-indigo-600">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-500">
          © 2026 TaskFlow. Built by Vaigi Madhava babu.
        </div>
      </div>
    </footer>
  );
}