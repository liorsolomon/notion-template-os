import { NextRequest, NextResponse } from "next/server";

const CAMPAIGN_ID = "free-nda-lead";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // 1. Persist to Supabase tagged as free-nda-lead
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      await fetch(`${supabaseUrl}/rest/v1/email_waitlist`, {
        method: "POST",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ email, campaign_id: CAMPAIGN_ID }),
      });
    } catch {
      // fail silently
    }
  }

  // 2. Add to templates email list via resend-sync
  const resendSyncUrl = process.env.RESEND_SYNC_URL ?? "https://3vo.ai/api/resend-sync";
  const resendSyncSecret = process.env.RESEND_SYNC_SECRET;

  try {
    await fetch(resendSyncUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(resendSyncSecret ? { "x-resend-sync-secret": resendSyncSecret } : {}),
      },
      body: JSON.stringify({ email, campaign_id: "templates" }),
    });
  } catch (err) {
    console.error("[nda-lead] resend-sync call failed:", err);
  }

  return NextResponse.json({ ok: true, ndaUrl: process.env.NDA_DOCS_URL ?? null });
}
