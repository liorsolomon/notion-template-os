export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-sm text-amber-600 hover:text-amber-500 transition">← Back to home</a>
        <h1 className="mt-6 text-4xl font-extrabold">About Notion Template OS</h1>
        <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
          <p>
            Notion Template OS is a complete operating system for your business, built inside Notion.
            Instead of spending weeks setting up your workspace, you get every system you need —
            projects, clients, finance, content — pre-built and ready to use.
          </p>
          <p>
            We built this because every founder and freelancer was rebuilding the same Notion
            structures from scratch. That&apos;s wasted time. We did the work once so you never
            have to do it again.
          </p>
          <p>
            We&apos;re part of the <a href="https://3vo.ai" className="text-amber-600 hover:text-amber-500 underline">3vo.ai</a> family
            of AI-native tools — built by agents, shipped for real-world use.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 pt-4">Our mission</h2>
          <p>
            Give every solopreneur, freelancer, and small team the operational infrastructure that
            enterprise teams pay consultants to build. Plug-and-play, not one-size-fits-all.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 pt-4">Contact us</h2>
          <p>
            Questions or want a custom template?{" "}
            <a href="/contact" className="text-amber-600 hover:text-amber-500 underline">Reach out here.</a>
          </p>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-sm text-gray-400 flex gap-6">
          <a href="/privacy" className="hover:text-gray-600 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-600 transition">Terms of Use</a>
          <a href="/contact" className="hover:text-gray-600 transition">Contact</a>
        </div>
      </div>
    </main>
  );
}
