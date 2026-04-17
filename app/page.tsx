import WaitlistForm from "./waitlist-form";

const FEATURES = [
  {
    icon: "👤",
    title: "Client Hub",
    description:
      "Keep every client's details, contacts, contracts, and communication history in one clean view. Never scramble for a client's email or project context again.",
  },
  {
    icon: "📋",
    title: "Project Command Center",
    description:
      "Track every deliverable, deadline, and project status at a glance. Stay on top of multiple clients without dropping the ball.",
  },
  {
    icon: "🧾",
    title: "Invoice & Income Tracker",
    description:
      "Log invoices, track payment status, and see your monthly revenue in seconds. Stop chasing down what you're owed.",
  },
  {
    icon: "🎯",
    title: "Goals & OKRs",
    description:
      "Set quarterly goals and break them into trackable outcomes. Build the business you want — not just the one that keeps you busy.",
  },
  {
    icon: "📅",
    title: "Weekly Review System",
    description:
      "A structured weekly ritual to review your wins, flag blockers, and plan what matters next. Work smarter, not just harder.",
  },
  {
    icon: "⚡",
    title: "Quick Capture",
    description:
      "Dump ideas, tasks, and notes instantly — no friction, no lost thoughts. Everything finds its place automatically.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I used to have clients in Notion, invoices in a spreadsheet, and tasks in Todoist. Now everything is in one place and I actually feel in control.",
    name: "— Alex R., UX Freelancer",
  },
  {
    quote:
      "This replaced 4 different tools for me. I set it up in an afternoon and haven't looked back.",
    name: "— Maria T., Independent Consultant",
  },
];

const FAQ = [
  {
    q: "Do I need Notion experience?",
    a: "No. The templates are pre-built — just duplicate to your workspace and fill in your details. A short setup guide walks you through it step by step.",
  },
  {
    q: "What Notion plan do I need?",
    a: "A free Notion account works for most templates. Some advanced views (filtered dashboards, linked databases) work best on Notion Plus ($10/mo), but you can start free.",
  },
  {
    q: "Can I customize everything?",
    a: "Yes. Every property, view, and formula is fully editable. The templates are starting points — you own them completely.",
  },
  {
    q: "Is this a subscription?",
    a: "No. One-time payment, you own it forever. No monthly fees, no renewal reminders.",
  },
  {
    q: "Do I get updates?",
    a: "Yes. All buyers get lifetime access to every future version. When we improve the templates, you get the update — free.",
  },
  {
    q: "What's your refund policy?",
    a: "Full refund within 30 days, no questions asked. If it doesn't work for your setup, you get your money back.",
  },
  {
    q: "I already have a system — why switch?",
    a: "Most freelancers have a patchwork of apps, not a real system. Notion Template OS is the unified version — everything connected, nothing lost between tools.",
  },
  {
    q: "Does this work on mobile?",
    a: "Yes. Notion has iOS and Android apps. You can capture, review, and update from anywhere.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[var(--font-geist-sans)]">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4 flex items-center justify-between max-w-5xl mx-auto w-full">
        <div className="font-bold text-lg tracking-tight">
          Notion Template OS
        </div>
        <a
          href="#get-access"
          className="bg-black text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          Get Instant Access — $39
        </a>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-24 pb-20 max-w-3xl mx-auto">
        <div className="inline-block bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
          One-time $39 · Instant access · No subscription
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-gray-900">
          Stop juggling tabs.
          <br />
          <span className="text-amber-500">Run your freelance business from one Notion workspace.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-xl mb-10 leading-relaxed">
          Notion Template OS gives freelancers and solopreneurs a single command
          center for clients, projects, invoices, and goals. No more scattered
          tools, missed deadlines, or invoices slipping through the cracks.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full max-w-md" id="get-access">
          <WaitlistForm />
        </div>
        <p className="text-sm text-gray-400 mt-4">
          30-day money-back guarantee · No subscription · Lifetime updates
        </p>
      </section>

      {/* Social proof bar */}
      <section className="bg-gray-50 border-y border-gray-100 py-6">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-8 text-center text-sm text-gray-600">
          <span className="text-gray-600">🧑‍💻 Built for freelancers &amp; solopreneurs</span>
          <span className="text-gray-600">⭐ Designed around real workflows</span>
          <span className="text-gray-600">🔒 Your data stays in Notion — always</span>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-4">
          Six systems. One workspace. Zero scattered tabs.
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-xl mx-auto">
          Six interconnected systems that work together as one. No plugins, no
          code, no monthly fees.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-amber-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Who this is for</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-800">✅ This is for you if...</h3>
              <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <li>You&apos;re a freelancer or solopreneur managing multiple clients and projects at once</li>
                <li>You&apos;re tired of tracking invoices, tasks, and client notes across separate apps</li>
                <li>You want a real system, not just another template you&apos;ll abandon in a week</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-800">❌ This is NOT for you if...</h3>
              <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <li>You run a large team and need proper project management software (use Linear or Jira)</li>
                <li>You don&apos;t use Notion and have no interest in learning it</li>
                <li>You have a dedicated ops team handling admin for you</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">How it works</h2>
        <p className="text-gray-600 text-center mb-14 max-w-lg mx-auto">
          From purchase to a fully working system in under an hour.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Purchase & duplicate", body: "Buy once, get instant access. Duplicate the template to your Notion workspace with one click." },
            { step: "02", title: "Fill in your details", body: "Add your clients, projects, and financial info. Takes about an hour. A setup guide walks you through each section." },
            { step: "03", title: "Run your business", body: "Use your daily dashboard to manage clients, track invoices, review goals, and capture ideas — all in one place." },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 font-bold text-lg flex items-center justify-center mx-auto mb-4">{s.step}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">What you get</h2>
          <p className="text-gray-600 text-center mb-10">Everything in one download. Nothing hidden behind upsells.</p>
          <ul className="space-y-4">
            {[
              "6 fully interconnected Notion templates (Client Hub, Project Command Center, Invoice Tracker, Goals & OKRs, Weekly Review, Quick Capture)",
              "Written setup guide — step-by-step instructions for each module",
              "Video walkthrough covering the full setup in real time",
              "Lifetime updates — every future version, free forever",
              "30-day money-back guarantee, no questions asked",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                <span className="text-amber-500 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100"
            >
              <p className="text-gray-700 leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="text-sm font-semibold text-gray-600">
                {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 px-6">
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

      {/* Guarantee */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-4">🛡️</div>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">30-day money-back guarantee</h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
            If Notion Template OS doesn&apos;t simplify your workflow within 30 days, email us and we&apos;ll
            refund every cent. No questions, no forms, no hassle.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="waitlist"
        className="bg-gray-900 text-white py-24 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">
          Your freelance business deserves a real system.
        </h2>
        <p className="text-gray-400 mb-3 max-w-md mx-auto">
          One-time $39. Yours forever. Lifetime updates included.
        </p>
        <p className="text-amber-400 text-sm mb-10 font-medium">
          30-day money-back guarantee — zero risk.
        </p>
        <div className="max-w-md mx-auto">
          <WaitlistForm dark />
        </div>
        <p className="text-gray-500 text-sm mt-4">
          No spam. Unsubscribe any time.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6 text-center text-sm text-gray-400">
        <p>© 2026 Notion Template OS — The 3vo.ai team</p>
        <p className="mt-2">
          <a
            href="https://x.com/3voai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            Follow us on X @3voai
          </a>
        </p>
      </footer>
    </div>
  );
}
