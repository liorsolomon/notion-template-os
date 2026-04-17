export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-sm text-amber-600 hover:text-amber-500 transition">← Back to home</a>
        <h1 className="mt-6 text-4xl font-extrabold">Contact</h1>
        <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
          <p>
            Questions about the template? Need help setting it up? Want a customized version for
            your team? Reach us at{" "}
            <a href="mailto:hello@3vo.ai" className="text-amber-600 hover:text-amber-500 underline">
              hello@3vo.ai
            </a>
          </p>
          <p>
            For refund requests, include your order email and we&apos;ll process your 30-day
            money-back guarantee within 1 business day.
          </p>
          <p>
            Follow us on{" "}
            <a href="https://x.com/3voai" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-500 underline">
              X @3voai
            </a>{" "}
            for template updates and Notion tips.
          </p>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-sm text-gray-400 flex gap-6">
          <a href="/about" className="hover:text-gray-600 transition">About</a>
          <a href="/privacy" className="hover:text-gray-600 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-600 transition">Terms of Use</a>
        </div>
      </div>
    </main>
  );
}
