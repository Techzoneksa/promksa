import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

function checkAuth(request: NextRequest): boolean {
  const token = process.env.ADMIN_LEADS_TOKEN;
  if (!token) return false;
  const cookieToken = request.cookies.get("admin_token")?.value;
  const queryToken = request.nextUrl.searchParams.get("token");
  return cookieToken === token || queryToken === token;
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, message: "غير مصرح" }, { status: 401 });
  }

  const supabase = createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ success: false, message: "قاعدة البيانات غير متصلة", leads: [], total: 0 });
  }

  const { searchParams } = request.nextUrl;
  const status = searchParams.get("status") || "all";
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "desc";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "20", 10);
  const offset = (page - 1) * limit;

  let query = supabase.from("contact_leads").select("*", { count: "exact" });

  if (status !== "all") {
    query = query.eq("status", status);
  }

  if (search) {
    query = query.or(`name.ilike.%${search}%,phone.ilike.%${search}%,email.ilike.%${search}%,service.ilike.%${search}%`);
  }

  query = query.order("created_at", { ascending: sort === "asc" });
  query = query.range(offset, offset + limit - 1);

  const { data: leads, count, error } = await query;

  if (error) {
    return NextResponse.json({ success: false, message: error.message, leads: [], total: 0 }, { status: 500 });
  }

  return NextResponse.json({ success: true, leads: leads || [], total: count || 0, page, limit });
}
