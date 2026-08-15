"use client";

import { useState } from "react";
import { usePostHog } from "posthog-js/react";

export default function NdaGateForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [ndaUrl, setNdaUrl] = useState<string | null>(null);
  const posthog = usePostHog();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    posthog?.capture("nda_gate_submitted", { email });

    try {
      const res = await fetch("/api/nda-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        const data = await res.json();
        setNdaUrl(data.ndaUrl);
        setStatus("success");
        posthog?.capture("nda_gate_success", { email });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-4">
        <div className="bg-green-50 border border-green-200 rounded-xl px-6 py-5 text-center">
          <p className="font-semibold text-green-800 mb-1">You got the NDA. ✓</p>
          {ndaUrl ? (
            <a
              href={ndaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              Download the NDA →
            </a>
          ) : (
            <p className="text-green-700 text-sm mt-1">Check your inbox — the link is on its way.</p>
          )}
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-5 text-center">
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            The full suite includes <strong>7 more documents</strong> — NDAs, SOWs, invoices, proposals, contracts, pitch decks, and more.
          </p>
          <a
            href="#get-it"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Get the full suite — $49
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1 rounded-full px-5 py-3 text-sm border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-gray-900 hover:bg-gray-700 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors disabled:opacity-50 whitespace-nowrap"
      >
        {status === "loading" ? "Sending…" : "Get the NDA free →"}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-xs mt-1 w-full text-center">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
