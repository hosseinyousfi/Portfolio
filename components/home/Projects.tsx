import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { featuredProject, projectCards } from "@/lib/projects";
import { ArrowLeftIcon, CheckIcon, ExternalIcon } from "@/components/icons";

const featuredHighlights = [
  "پرداخت آنلاین شهریه و اقساط‌بندی خودکار با درگاه زرین‌پال",
  "رتبه اعتباری زنده A تا F برای هر دانش‌آموز",
  "حقوق پویای کارکنان + ماژول آموزشی کامل با آزمون ضدتقلب",
];

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="نمونه‌کارها"
          title="پروژه‌هایی که ساخته‌ام"
          subtitle="نمونه‌ای از پروژه‌های واقعی که از صفر تا استقرار روی سرور انجام داده‌ام."
        />

        {/* Featured project */}
        <Reveal className="mt-14">
          <Link href={`/projects/${featuredProject.slug}/`} className="group block">
            <article className="glass-strong relative overflow-hidden rounded-[2rem] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_36px_6px_rgba(34,211,238,.18)] lg:grid lg:grid-cols-2">
              <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:min-h-[22rem]">
                <Image
                  src={featuredProject.card.image}
                  alt={featuredProject.card.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent lg:bg-gradient-to-l lg:from-base-100/80 lg:via-transparent" />
              </div>

              <div className="flex flex-col p-6 sm:p-9">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-l from-brand to-brand-deep px-3.5 py-1.5 text-xs font-bold text-white shadow-[0_6px_18px_-4px_rgba(6,182,212,0.5)]">
                    ⭐ پروژه شاخص
                  </span>
                  <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                    دارای کاربران فعال
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-extrabold leading-snug text-white transition-colors group-hover:text-brand-bright sm:text-2xl">
                  {featuredProject.card.title}
                </h3>
                <p className="mt-3 leading-relaxed text-mist/70">
                  {featuredProject.card.tagline}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {featuredHighlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-mist/75">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-bright">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {featuredProject.card.tags.map((t) => (
                    <span
                      key={t}
                      className="ltr rounded-full border border-brand/20 bg-brand/10 px-2.5 py-1 text-[11px] font-semibold text-brand-bright"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-bright">
                  مطالعه کامل پروژه
                  <ArrowLeftIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </span>
              </div>
            </article>
          </Link>
        </Reveal>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectCards.map((p, i) => {
            const CardInner = (
              <article className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_28px_4px_rgba(34,211,238,.15)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="ltr rounded-full border border-brand/20 bg-brand/10 px-2.5 py-1 text-[11px] font-semibold text-brand-bright"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white transition-colors group-hover:text-brand-bright">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist/75">
                    {p.tagline}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-bright">
                    {"external" in p && p.external ? (
                      <>
                        مشاهده دمو
                        <ExternalIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                      </>
                    ) : (
                      <>
                        مشاهده جزئیات پروژه
                        <ArrowLeftIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                      </>
                    )}
                  </span>
                </div>
              </article>
            );

            return (
              <Reveal key={p.title} delay={(i % 3) * 0.08} className="h-full">
                {"external" in p && p.external ? (
                  <a href={p.href} target="_blank" rel="noreferrer" className="block h-full">
                    {CardInner}
                  </a>
                ) : (
                  <Link href={p.href} className="block h-full">
                    {CardInner}
                  </Link>
                )}
              </Reveal>
            );
          })}

          {/* CTA card */}
          <Reveal delay={0.16} className="h-full">
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-brand/30 bg-brand/5 p-8 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-2xl text-white">
                +
              </span>
              <h3 className="text-lg font-bold text-white">پروژه بعدی می‌تواند مال شما باشد</h3>
              <p className="text-sm leading-relaxed text-mist/75">
                ایده‌تان را بگویید تا با هم به یک محصول واقعی تبدیلش کنیم.
              </p>
              <Link href="/#contact" className="btn-brand px-6 py-3 text-sm">
                شروع گفتگو
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
