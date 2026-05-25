import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة الخصوصية لموقع Prominent Experts - كيفية جمع واستخدام وحماية بياناتك.",
  openGraph: { title: "سياسة الخصوصية | Prominent Experts", description: "سياسة الخصوصية للموقع." },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="سياسة الخصوصية" subtitle="نحن ملتزمون بحماية خصوصية زوار موقعنا وعملائنا." />

      <section className="section-padding bg-white">
        <Container className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <Section title="مقدمة">
              <p>نحن في Prominent Experts نأخذ خصوصية بياناتك على محمل الجد. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدامك لموقعنا.</p>
            </Section>

            <Section title="البيانات التي نجمعها">
              <p>قد نجمع الأنواع التالية من المعلومات:</p>
              <ul className="list-disc pr-5 space-y-2 text-brand-muted">
                <li><strong>معلومات التواصل:</strong> الاسم، البريد الإلكتروني، رقم الجوال عند ملء نموذج التواصل.</li>
                <li><strong>معلومات الاستخدام:</strong> البيانات عن كيفية تفاعلك مع الموقع مثل الصفحات التي تزورها.</li>
                <li><strong>معلومات تقنية:</strong> عنوان IP، نوع المتصفح، نظام التشغيل.</li>
              </ul>
            </Section>

            <Section title="كيف نستخدم البيانات">
              <p>نستخدم معلوماتك للأغراض التالية:</p>
              <ul className="list-disc pr-5 space-y-2 text-brand-muted">
                <li>الرد على استفساراتك وطلباتك.</li>
                <li>تحسين خدماتنا وتجربة المستخدم.</li>
                <li>إرسال معلومات ترويجية (بموافقتك فقط).</li>
                <li>تحليل أداء الموقع وتحسينه.</li>
              </ul>
            </Section>

            <Section title="ملفات الارتباط والتحليلات">
              <p>نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك على الموقع، بما في ذلك:</p>
              <ul className="list-disc pr-5 space-y-2 text-brand-muted">
                <li>تذكر تفضيلاتك.</li>
                <li>تحليل حركة الزوار عبر Google Analytics.</li>
                <li>تحسين أداء الموقع.</li>
              </ul>
              <p>يمكنك التحكم في إعدادات ملفات الارتباط من خلال متصفحك.</p>
            </Section>

            <Section title="مشاركة البيانات">
              <p>نحن لا نبيع أو نشارك معلوماتك الشخصية مع أطراف ثالثة، إلا في الحالات التالية:</p>
              <ul className="list-disc pr-5 space-y-2 text-brand-muted">
                <li>عندما نكون ملزمين قانوناً بذلك.</li>
                <li>مع مزودي الخدمات الذين يساعدوننا في تشغيل الموقع (مثل خدمات الاستضافة).</li>
                <li>بموافقتك الصريحة.</li>
              </ul>
            </Section>

            <Section title="حماية البيانات">
              <p>نطبق إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التعديل أو الإفشاء. تشمل هذه الإجراءات التشفير وجدران الحماية وأنظمة كشف الاختراق.</p>
            </Section>

            <Section title="حقوق المستخدم">
              <p>لديك الحق في:</p>
              <ul className="list-disc pr-5 space-y-2 text-brand-muted">
                <li>الوصول إلى بياناتك الشخصية.</li>
                <li>طلب تصحيح أو حذف بياناتك.</li>
                <li>الاعتراض على معالجة بياناتك.</li>
                <li>سحب موافقتك في أي وقت.</li>
                <li>تقديم شكوى للجهة الرقابية المختصة.</li>
              </ul>
            </Section>

            <Section title="التواصل معنا">
              <p>إذا كان لديك أي استفسار حول سياسة الخصوصية، يرجى التواصل معنا عبر:</p>
              <ul className="list-disc pr-5 space-y-2 text-brand-muted">
                <li>البريد الإلكتروني: hello@promksa.com</li>
                <li>واتساب: <a href="https://wa.me/966595394940" target="_blank" rel="noreferrer" className="text-brand-primary hover:underline">+966 59 539 4940</a></li>
              </ul>
            </Section>

            <p className="text-sm text-brand-muted/60 border-t border-[#f0edff] pt-6">آخر تحديث: يوليو 2026. قد يتم تحديث هذه السياسة من وقت لآخر، وسننصحك بأي تغييرات جوهرية.</p>
          </div>
        </Container>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-text mb-4">{title}</h2>
      <div className="space-y-3 leading-8 text-brand-muted">{children}</div>
    </div>
  );
}
