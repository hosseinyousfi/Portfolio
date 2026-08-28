import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";
import { GithubIcon, InstagramIcon, PhoneIcon, TelegramIcon } from "@/components/icons";

const channels = [
  { href: `tel:${site.phone}`, label: "تماس بگیرید", Icon: PhoneIcon, primary: true },
  { href: site.telegram, label: "تلگرام", Icon: TelegramIcon },
  { href: site.instagram, label: "اینستاگرام", Icon: InstagramIcon },
  { href: site.github, label: "گیت‌هاب", Icon: GithubIcon },
];

const promises = [
  {
    title: "مشاوره رایگان",
    desc: "بدون تعهد، درباره ایده‌تان صحبت می‌کنیم.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "پاسخ‌گویی سریع",
    desc: "معمولاً در کمتر از ۲۴ ساعت پاسخ می‌دهم.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "کد تمیز و مستند",
    desc: "مالکیت کامل کد و مستندات از روز اول با شماست.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2.5rem] px-6 py-12 text-center sm:px-12 lg:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(6,182,212,0.18),transparent_65%)]" />

            <SectionHeading
              eyebrow="بیایید همکاری کنیم"
              title="بیایید ایده شما را به واقعیت تبدیل کنیم"
              subtitle="آماده شروع یک پروژه جدید هستید؟ از هر کدام از راه‌های زیر می‌توانید با من در ارتباط باشید."
            />

            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
              {channels.map(({ href, label, Icon, primary }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className={
                    primary
                      ? "btn-brand px-6 py-3 text-sm"
                      : "btn-ghost px-6 py-3 text-sm"
                  }
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>

            <div className="relative mt-12 grid gap-4 sm:grid-cols-3">
              {promises.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08} className="h-full">
                  <div className="glass flex h-full flex-col items-center gap-3 rounded-2xl p-6 text-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-bright to-brand text-base">
                      {p.icon}
                    </span>
                    <p className="font-semibold text-white">{p.title}</p>
                    <p className="text-sm text-mist/55">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
