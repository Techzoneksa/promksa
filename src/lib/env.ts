export function getEnvStatus() {
  return {
    supabase: {
      configured: !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      url: process.env.NEXT_PUBLIC_SUPABASE_URL ? "✓" : "✗",
      serviceRole: process.env.SUPABASE_SERVICE_ROLE_KEY ? "✓" : "✗",
    },
    smtp: {
      configured: !!process.env.SMTP_HOST && !!process.env.SMTP_USER && !!process.env.SMTP_PASS,
      host: process.env.SMTP_HOST ? "✓" : "✗",
      user: process.env.SMTP_USER ? "✓" : "✗",
      pass: process.env.SMTP_PASS ? "✓" : "✗",
      contactTo: process.env.CONTACT_TO_EMAIL ? "✓" : "✗",
    },
    admin: {
      configured: !!process.env.ADMIN_LEADS_TOKEN,
      token: process.env.ADMIN_LEADS_TOKEN ? "✓" : "✗",
    },
    analytics: {
      configured: !!process.env.NEXT_PUBLIC_GA_ID,
      gaId: process.env.NEXT_PUBLIC_GA_ID ? "✓" : "✗",
    },
    site: {
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://promksa.com (default)",
    },
  };
}

export type EnvStatus = ReturnType<typeof getEnvStatus>;

export function isSupabaseReady(): boolean {
  return !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY;
}

export function isSMTPReady(): boolean {
  return !!process.env.SMTP_HOST && !!process.env.SMTP_USER && !!process.env.SMTP_PASS && !!process.env.CONTACT_TO_EMAIL;
}

export function isAdminReady(): boolean {
  return !!process.env.ADMIN_LEADS_TOKEN;
}
