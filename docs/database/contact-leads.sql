-- Contact Leads Table for Prominent Experts
-- Run this SQL in your Supabase SQL Editor

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS contact_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text,
  phone text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  source text DEFAULT 'website',
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed', 'spam')),
  notes text,
  ip_address text,
  user_agent text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_contact_leads_created_at ON contact_leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_leads_status ON contact_leads (status);
CREATE INDEX IF NOT EXISTS idx_contact_leads_phone ON contact_leads (phone);
CREATE INDEX IF NOT EXISTS idx_contact_leads_service ON contact_leads (service);

-- Enable Row Level Security
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

-- RLS: Only allow inserts via anon key (from API route)
CREATE POLICY "Allow anon insert" ON contact_leads
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- RLS: Allow full access only via service role (from server API)
CREATE POLICY "Allow service full access" ON contact_leads
  FOR ALL TO service_role
  USING (true)
  WITH CHECK (true);
