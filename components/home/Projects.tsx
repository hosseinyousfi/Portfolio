import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projectCards } from "@/lib/projects";
import { ArrowLeftIcon, ExternalIcon } from "@/components/icons";

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="نمونه‌کارها"
          title="پروژه‌هایی که ساخته‌ام"
          subtitle="نمونه‌ای از پروژه‌های واقعی که از صفر تا استقرار روی سرور انجام داده‌ام."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
