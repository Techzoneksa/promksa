import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

function checkAuth(request: NextRequest): boolean {
  const token = process.env.ADMIN_LEADS_TOKEN;
  if (!token) return false;
  const cookieToken = request.cookies.get("admin_token")?.value;
  const queryToken = request.nextUrl.searchParams.get("token");
  return cookieToken === token || queryToken === token;
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, message: "غير مصرح" }, { status: 401 });
  }

  const { id } = await params;
  const supabase = createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ success: false, message: "قاعدة البيانات غير متصلة" }, { status: 500 });
  }

  const body = await request.json();
  const updates: Record<string, unknown> = {};
  if (body.status) updates.status = body.status;
  if (body.notes !== undefined) updates.notes = body.notes;
  updates.updated_at = new Date().toISOString();

  const { error } = await supabase.from("contact_leads").update(updates).eq("id", id);

  if (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, message: "غير مصرح" }, { status: 401 });
  }

  const { id } = await params;
  const supabase = createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ success: false, message: "قاعدة البيانات غير متصلة" }, { status: 500 });
  }

  const { data, error } = await supabase.from("contact_leads").select("*").eq("id", id).single();

  if (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 404 });
  }

  return NextResponse.json({ success: true, lead: data });
}
