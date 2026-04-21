import WaitlistForm from "./waitlist-form";
import NdaGateForm from "./nda-gate-form";

const WHY = [
  {
    title: "Full suite, not piecemeal.",
    description: "Gumroad packs sell individual templates at $10–$39 each. You get the whole toolkit for $49.",
  },
  {
    title: "Built for solopreneurs.",
    description: "Not enterprise boilerplate. Lean, practical, and written in plain language.",
  },
  {
    title: "Instant access.",
    description: "No waiting. Download and use immediately.",
  },
];

const WHATS_INCLUDED = [
  "Client proposal template",
  "NDA (mutual and one-way)",
  "Statement of Work",
  "Invoice template",
  "Freelance services agreement",
  "Project brief template",
  "Pitch deck outline (10-slide structure)",
  "Cold outreach email sequence (3-part)",
];

const FAQ = [
  {
    q: "Are these legally vetted?",
    a: "These are starting-point templates, not legal advice. We recommend having your attorney review any document before signing.",
  },
  {
    q: "What format are they in?",
    a: "Google Docs and .docx — easy to edit and brand.",
  },
  {
    q: "Can I use them for client work?",
    a: "Yes. No restrictions on use.",
  },
  {
    q: "What if I need a template that isn't listed?",
    a: "Tell us. We're adding to the suite regularly.",
  },
  {
    q: "Do I need to pay again for updates?",
    a: "No. One-time purchase. You get access to all future updates.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[var(--font-geist-sans)]">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4 flex items-center justify-between max-w-5xl mx-auto w-full">
        <div className="font-bold text-lg tracking-tight">
          templates.3vo.ai
        </div>
        <a
          href="#get-it"
          className="bg-black text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          Get it — $49
        </a>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-24 pb-20 max-w-3xl mx-auto">
        <div className="inline-block bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
          Full suite · $49 one-time · No subscription
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-gray-900">
          Every business doc you need —{" "}
          <span className="text-amber-500">without the lawyer fees.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-xl mb-10 leading-relaxed">
          A full suite of ready-to-use templates: NDAs, SOWs, proposals, contracts, pitch decks,
          and more. Built for solopreneurs who move fast. One-time. Keep forever.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full max-w-md" id="get-it">
          <WaitlistForm buttonText="Get it — $49" />
        </div>
        <p className="text-sm text-gray-400 mt-4">
          $49 — one-time · No subscription · Instant access
        </p>
      </section>

      {/* Free NDA download gate */}
      <section className="py-14 px-6 border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <div className="text-center mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                Try one template free
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-2">Get the NDA</h2>
              <p className="text-gray-500 text-sm mt-2 max-w-sm mx-auto">
                Enter your email and get the NDA template instantly. No credit card, no catch.
              </p>
            </div>
            <NdaGateForm />
          </div>
        </div>
      </section>

      {/* Why templates.3vo.ai */}
      <section className="bg-amber-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why templates.3vo.ai</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {WHY.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-amber-700 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">What&apos;s included</h2>
        <p className="text-gray-600 text-center mb-10">Everything in one download. Nothing hidden behind upsells.</p>
        <ul className="space-y-4">
          {WHATS_INCLUDED.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
              <span className="text-amber-500 font-bold mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Market context */}
      <section className="bg-gray-50 border-y border-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <div className="text-4xl font-bold text-amber-500 mb-2">Faster</div>
            <p className="text-gray-600 text-sm">Solopreneurs who use formal agreements get paid faster and have fewer disputes</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <div className="text-4xl font-bold text-amber-500 mb-2">$300–$800</div>
            <p className="text-gray-600 text-sm">Average lawyer fee for a custom NDA — you get ours for a fraction of that</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group bg-white border border-gray-100 rounded-xl px-6 py-4 cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-gray-800 text-sm list-none">
                  {item.q}
                  <span className="ml-4 text-amber-500 text-lg font-light group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="bg-gray-900 text-white py-24 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">
          Stop reinventing the wheel.
        </h2>
        <p className="text-gray-400 mb-3 max-w-md mx-auto">
          Get the full solopreneur document toolkit — proposals, NDAs, SOWs, contracts, and more.
        </p>
        <p className="text-amber-400 text-sm mb-10 font-medium">
          $49 one-time · Keep forever · Instant access.
        </p>
        <div className="max-w-md mx-auto" id="get-it-bottom">
          <WaitlistForm dark buttonText="Get it — $49" />
        </div>
        <p className="text-gray-500 text-sm mt-4">
          No subscription · Includes all future updates
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 px-6 text-center text-sm text-gray-400">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
          <a href="/about" className="hover:text-gray-600 transition-colors">About</a>
          <a href="/contact" className="hover:text-gray-600 transition-colors">Contact</a>
          <a href="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-600 transition-colors">Terms of Use</a>
          <a href="https://x.com/3voai" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">X @3voai</a>
        </div>
        <p>© 2026 templates.3vo.ai — The 3vo.ai team</p>
      </footer>
    </div>
  );
}
