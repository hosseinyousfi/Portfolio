import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { CheckIcon } from "@/components/icons";

const services = [
  {
    title: "توسعه بک‌اند با جنگو",
    desc: "ساخت APIهای قدرتمند، امن و مقیاس‌پذیر با Django و Django REST Framework.",
    items: ["معماری تمیز و اصولی", "احراز هویت و مجوزها", "مستندسازی کامل API"],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: "طراحی فرانت‌اند مدرن",
    desc: "پیاده‌سازی رابط‌های کاربری واکنش‌گرا و زیبا با React، Next.js و Tailwind CSS.",
    items: ["ریسپانسیو در همه دستگاه‌ها", "انیمیشن‌های ظریف و روان", "تجربه کاربری اصولی"],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "مدیریت پایگاه داده",
    desc: "طراحی و بهینه‌سازی دیتابیس‌های PostgreSQL و MySQL برای عملکرد پایدار.",
    items: ["ایندکس‌گذاری هوشمند", "بکاپ‌گیری خودکار", "کوئری‌های بهینه"],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 3.582 3 8 3s8-1 8-3V7M4 7c0 2 3.582 3 8 3s8-1 8-3M4 7c0-2 3.582-3 8-3s8 1 8 3m0 5c0 2-3.582 3-8 3s-8-1-8-3" />
      </svg>
    ),
  },
  {
    title: "استقرار و DevOps",
    desc: "راه‌اندازی سرور و خودکارسازی فرآیندها با Docker و CI/CD.",
    items: ["دیپلوی بدون قطعی", "مانیتورینگ لحظه‌ای", "امنیت زیرساخت"],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12a7 7 0 1114 0 7 7 0 01-14 0zm7-9v2m0 14v2m9-9h-2M5 12H3m15.36 6.36l-1.41-1.41M7.05 7.05L5.64 5.64m12.72 0l-1.41 1.41M7.05 16.95l-1.41 1.41" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="خدمات"
          title="تخصص و خدمات من"
          subtitle="از ایده تا اجرا؛ خدماتی که برای ساخت یک محصول دیجیتال حرفه‌ای به آن نیاز دارید."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="h-full">
              <div className="glass group flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_24px_4px_rgba(34,211,238,.14)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-bright to-brand text-base transition-transform duration-300 group-hover:scale-110">
                  {s.icon}
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist/60">{s.desc}</p>
                <ul className="mt-5 space-y-2.5 border-t border-white/8 pt-5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-mist/70">
                      <CheckIcon className="h-3.5 w-3.5 shrink-0 text-brand-bright" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
