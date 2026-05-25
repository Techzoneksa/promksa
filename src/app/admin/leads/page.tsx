"use client";

import { useState, useEffect } from "react";
import { Search, X, ChevronDown, ChevronUp, ExternalLink, Loader2, LogIn, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";

type Lead = {
  id: string;
  name: string;
  email: string | null;
  phone: string;
  service: string;
  message: string;
  status: "new" | "contacted" | "closed" | "spam";
  notes: string | null;
  created_at: string;
  source: string;
};

type SortDir = "desc" | "asc";

const statusColors: Record<string, string> = {
  new: "bg-brand-primary/10 text-brand-primary",
  contacted: "bg-blue-50 text-blue-600",
  closed: "bg-green-50 text-green-600",
  spam: "bg-red-50 text-red-600",
};

const statusLabels: Record<string, string> = {
  new: "جديد",
  contacted: "تم التواصل",
  closed: "مغلق",
  spam: "مزعج",
};

export default function LeadsPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [inputToken, setInputToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortDir>("desc");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [noteText, setNoteText] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/login").then(async (res) => {
      const data = await res.json();
      if (data.success) {
        setLoggedIn(true);
      }
      setLoading(false);
    });
  }, []);

  const handleLogin = async () => {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: inputToken }),
    });
    const data = await res.json();
    if (data.success) {
      setLoggedIn(true);
      setPage(1);
    } else {
      setError("الرمز غير صحيح");
    }
  };

  useEffect(() => {
    if (!loggedIn) return;
    const params = new URLSearchParams();
    if (statusFilter !== "all") params.set("status", statusFilter);
    if (search) params.set("search", search);
    params.set("sort", sort);
    params.set("page", String(page));
    params.set("limit", "20");

    setLoading(true);
    fetch(`/api/admin/leads?${params.toString()}`, { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          setLeads(data.leads);
          setTotal(data.total);
        }
      })
      .finally(() => setLoading(false));
  }, [loggedIn, statusFilter, search, sort, page]);

  const updateLead = async (id: string, updates: Record<string, unknown>) => {
    setSaving(true);
    await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
      credentials: "include",
    });
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, ...updates } : l)));
    if (selectedLead?.id === id) setSelectedLead((prev) => prev ? { ...prev, ...updates } : null);
    setSaving(false);
  };

  const totalPages = Math.ceil(total / 20);

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F4F0FF] via-white to-white">
        <Container>
          {loading ? null : (
            <div className="mx-auto max-w-sm text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#F4F0FF]">
                <LogIn className="h-10 w-10 text-brand-primary" />
              </div>
              <h1 className="text-3xl font-bold text-brand-text">لوحة التحكم</h1>
              <p className="mt-2 text-brand-muted">أدخل رمز الدخول للمتابعة</p>
              {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
              <div className="mt-6 space-y-3">
                <input type="password" value={inputToken} onChange={(e) => setInputToken(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  placeholder="رمز الدخول" className="w-full rounded-xl border border-[#f0edff] bg-white px-4 py-3 text-center text-brand-text transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20" />
                <button type="button" onClick={handleLogin} className="w-full rounded-2xl bg-brand-primary py-3 text-sm font-bold text-white transition hover:shadow-apple-hover">دخول</button>
              </div>
            </div>
          )}
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      <div className="bg-white border-b border-[#f0edff]">
        <Container className="py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-brand-text">طلبات التواصل</h1>
              <p className="text-sm text-brand-muted">إجمالي {total} طلب</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["all", "new", "contacted", "closed", "spam"].map((s) => (
                <button key={s} type="button" onClick={() => { setStatusFilter(s); setPage(1); }}
                  className={`rounded-full border px-4 py-1.5 text-xs font-bold transition ${statusFilter === s ? "border-brand-primary bg-brand-primary text-white" : "border-[#f0edff] bg-white text-brand-muted hover:border-brand-primary/30 hover:text-brand-primary"}`}>
                  {s === "all" ? "الكل" : statusLabels[s]}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
              <input type="text" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} placeholder="بحث بالاسم أو الجوال أو البريد أو الخدمة..."
                className="w-full rounded-xl border border-[#f0edff] bg-white py-2.5 pr-10 pl-10 text-sm text-brand-text transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20" />
              {search ? <button type="button" onClick={() => setSearch("")} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted"><X className="h-4 w-4" /></button> : null}
            </div>
            <button type="button" onClick={() => setSort((s) => s === "desc" ? "asc" : "desc")} className="inline-flex items-center gap-1 rounded-xl border border-[#f0edff] bg-white px-4 py-2.5 text-sm font-bold text-brand-muted transition hover:border-brand-primary/30">
              {sort === "desc" ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
              {sort === "desc" ? "الأحدث" : "الأقدم"}
            </button>
          </div>
        </Container>
      </div>

      <Container className="py-6">
        {loading ? (
          <div className="flex items-center justify-center py-20"><Loader2 className="h-8 w-8 animate-spin text-brand-primary" /></div>
        ) : leads.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-apple">
            <Search className="mx-auto h-10 w-10 text-brand-muted/40" />
            <h3 className="mt-4 text-xl font-bold text-brand-text">لا توجد طلبات</h3>
            <p className="mt-2 text-brand-muted">لم يتم العثور على طلبات تطابق معايير البحث.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {leads.map((lead) => (
              <button key={lead.id} type="button" onClick={() => { setSelectedLead(lead); setNoteText(lead.notes || ""); }}
                className={`w-full rounded-2xl border bg-white p-5 text-right shadow-apple transition hover:shadow-apple-hover text-left ${selectedLead?.id === lead.id ? "border-brand-primary" : "border-[#f0edff]"}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-brand-text truncate">{lead.name}</h3>
                      <span className={`rounded-full px-2.5 py-0.5 text-2xs font-semibold ${statusColors[lead.status]}`}>{statusLabels[lead.status]}</span>
                    </div>
                    <p className="mt-1 text-sm text-brand-muted">{lead.phone}{lead.email ? ` • ${lead.email}` : ""}</p>
                    <p className="mt-1 text-xs text-brand-muted">
                      <Clock className="inline h-3 w-3 ml-1" />
                      {new Date(lead.created_at).toLocaleDateString("ar-SA")}
                      {" • "}{lead.service}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-brand-muted/40" />
                </div>
              </button>
            ))}
          </div>
        )}

        {totalPages > 1 ? (
          <div className="mt-6 flex items-center justify-center gap-2">
            <button type="button" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
              className="rounded-xl border border-[#f0edff] bg-white px-4 py-2 text-sm font-bold text-brand-muted transition hover:border-brand-primary/30 disabled:opacity-30">السابق</button>
            <span className="text-sm text-brand-muted">صفحة {page} من {totalPages}</span>
            <button type="button" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
              className="rounded-xl border border-[#f0edff] bg-white px-4 py-2 text-sm font-bold text-brand-muted transition hover:border-brand-primary/30 disabled:opacity-30">التالي</button>
          </div>
        ) : null}
      </Container>

      {selectedLead ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 backdrop-blur-sm sm:items-center" onClick={() => setSelectedLead(null)}>
          <div className="w-full max-w-lg rounded-t-3xl bg-white p-6 shadow-luxe sm:rounded-3xl sm:m-4 max-h-[90vh] overflow-y-auto text-right" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-brand-text">{selectedLead.name}</h2>
                <p className="text-sm text-brand-muted">{new Date(selectedLead.created_at).toLocaleString("ar-SA")}</p>
              </div>
              <button type="button" onClick={() => setSelectedLead(null)} className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4F0FF] text-brand-muted"><X className="h-4 w-4" /></button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="rounded-xl bg-[#F7F8FC] p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div><span className="text-xs text-brand-muted">الجوال</span><p className="font-semibold text-brand-text">{selectedLead.phone}</p></div>
                  <div><span className="text-xs text-brand-muted">البريد</span><p className="font-semibold text-brand-text">{selectedLead.email || "—"}</p></div>
                  <div><span className="text-xs text-brand-muted">الخدمة</span><p className="font-semibold text-brand-text">{selectedLead.service}</p></div>
                  <div><span className="text-xs text-brand-muted">المصدر</span><p className="font-semibold text-brand-text">{selectedLead.source}</p></div>
                </div>
              </div>
              <div className="rounded-xl bg-[#F7F8FC] p-4">
                <span className="text-xs text-brand-muted">الرسالة</span>
                <p className="mt-1 text-brand-text leading-7 whitespace-pre-wrap">{selectedLead.message}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["new", "contacted", "closed", "spam"].map((s) => (
                  <button key={s} type="button" disabled={selectedLead.status === s || saving} onClick={() => updateLead(selectedLead.id, { status: s })}
                    className={`rounded-full border px-4 py-1.5 text-xs font-bold transition ${selectedLead.status === s ? "border-brand-primary bg-brand-primary text-white" : "border-[#f0edff] bg-white text-brand-muted hover:border-brand-primary/30"} disabled:opacity-50`}>
                    {statusLabels[s]}
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-muted mb-1">ملاحظات</label>
                <textarea rows={3} value={noteText} onChange={(e) => setNoteText(e.target.value)} placeholder="أضف ملاحظة..."
                  className="w-full rounded-xl border border-[#f0edff] bg-white px-4 py-3 text-sm text-brand-text transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20" />
                <button type="button" disabled={saving || noteText === (selectedLead.notes || "")} onClick={() => updateLead(selectedLead.id, { notes: noteText })}
                  className="mt-2 rounded-xl bg-brand-primary px-5 py-2 text-xs font-bold text-white transition hover:bg-brand-primary/90 disabled:opacity-50">
                  {saving ? "جاري الحفظ..." : "حفظ الملاحظات"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
