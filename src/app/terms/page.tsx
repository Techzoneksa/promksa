import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "الشروط والأحكام",
  description: "شروط وأحكام استخدام موقع وخدمات Prominent Experts.",
  openGraph: { title: "الشروط والأحكام | Prominent Experts", description: "شروط استخدام الموقع." },
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="الشروط والأحكام" subtitle="يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا." />

      <section className="section-padding bg-white">
        <Container className="mx-auto max-w-4xl">
          <div className="space-y-8">
            <Section title="مقدمة">
              <p>باستخدامك لموقع Prominent Experts وخدماتنا، فإنك توافق على هذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا.</p>
            </Section>

            <Section title="استخدام الموقع">
              <p>عند استخدامك للموقع، أنت توافق على:</p>
              <ul className="list-disc pr-5 space-y-2 text-brand-muted">
                <li>عدم استخدام الموقع لأي غرض غير قانوني.</li>
                <li>عدم محاولة اختراق أمن الموقع أو الوصول غير المصرح به.</li>
                <li>تقديم معلومات دقيقة عند ملء نماذج التواصل.</li>
                <li>عدم إساءة استخدام خدماتنا بأي شكل.</li>
              </ul>
            </Section>

            <Section title="الخدمات المعروضة">
              <p>نقدم مجموعة من الخدمات الرقمية بما في ذلك تصميم المواقع، المتاجر الإلكترونية، تطبيقات الجوال، الهوية البصرية، التسويق الرقمي، حلول الذكاء الاصطناعي، والربط والتكامل.</p>
              <p>يتم تقديم وصف الخدمات على الموقع لأغراض إعلامية فقط، وقد تختلف التفاصيل حسب متطلبات كل مشروع. يتم الاتفاق على النطاق النهائي للخدمات من خلال عقد مستقل بيننا وبين العميل.</p>
            </Section>

            <Section title="طلبات التواصل">
              <p>عند تقديم طلب تواصل من خلال الموقع، فإنك توافق على أن نتواصل معك باستخدام المعلومات التي قدمتها. تقديم نموذج التواصل لا يعتبر عقداً ملزماً، وسيتم مناقشة تفاصيل المشروع قبل أي اتفاق رسمي.</p>
            </Section>

            <Section title="حقوق الملكية الفكرية">
              <p>جميع المحتويات على هذا الموقع، بما في ذلك النصوص والصور والشعارات والتصاميم، هي ملك لـ Prominent Experts أو مرخصة لنا. لا يجوز نسخ أو إعادة استخدام أي محتوى دون إذن كتابي صريح.</p>
              <p>بعد الانتهاء من المشاريع، تنتقل حقوق الملكية الفكرية للمخرجات النهائية إلى العميل وفقاً للاتفاق المبرم بين الطرفين.</p>
            </Section>

            <Section title="حدود المسؤولية">
              <p>نحن نسعى لتقديم خدمات عالية الجودة، ولكننا لا نضمن أن تكون خدماتنا خالية من الأخطاء أو متاحة دون انقطاع. مسؤوليتنا محدودة بالقانون المعمول به.</p>
              <p>نحن غير مسؤولين عن أي أضرار غير مباشرة أو تبعية ناتجة عن استخدامك للموقع أو خدماتنا.</p>
            </Section>

            <Section title="الروابط الخارجية">
              <p>قد يحتوي موقعنا على روابط لمواقع خارجية. نحن غير مسؤولين عن محتوى أو سياسات الخصوصية الخاصة بتلك المواقع، وننصحك بمراجعة شروطها وسياساتها.</p>
            </Section>

            <Section title="التعديلات">
              <p>نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إخطارك بأي تغييرات جوهرية من خلال تحديث هذه الصفحة. استمرار استخدامك للموقع بعد التعديلات يعني موافقتك على الشروط المحدثة.</p>
            </Section>

            <Section title="التواصل معنا">
              <p>للاستفسارات المتعلقة بهذه الشروط، يرجى التواصل معنا:</p>
              <ul className="list-disc pr-5 space-y-2 text-brand-muted">
                <li>البريد الإلكتروني: hello@promksa.com</li>
                <li>واتساب: <a href="https://wa.me/966595394940" target="_blank" rel="noreferrer" className="text-brand-primary hover:underline">+966 59 539 4940</a></li>
              </ul>
            </Section>

            <p className="text-sm text-brand-muted/60 border-t border-[#f0edff] pt-6">آخر تحديث: يوليو 2026.</p>
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
