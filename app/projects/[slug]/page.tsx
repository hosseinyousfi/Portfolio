import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import Reveal from "@/components/Reveal";
import { ArrowLeftIcon, CheckIcon, ExternalIcon } from "@/components/icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.card.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="pb-20 pt-28 sm:pt-36">
      <div className="mx-auto max-w-6xl px-5">
        {/* breadcrumb */}
        <Reveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-mist/60 transition-colors hover:text-brand-bright"
          >
            <svg className="h-4 w-4 rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7" />
            </svg>
            بازگشت به نمونه‌کارها
          </Link>
        </Reveal>

        {/* hero */}
        <header className="mt-8">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {project.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-bright"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl text-2xl font-extrabold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-mist/70 sm:text-lg">
              {project.description}
            </p>
          </Reveal>
        </header>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_20rem]">
          {/* main content */}
          <div className="space-y-12">
            {project.sections.map((section, i) => (
              <Reveal key={i}>
                <section>
                  <h2 className="flex items-center gap-3 text-xl font-bold text-white">
                    <span className="h-6 w-1 rounded-full bg-gradient-to-b from-brand-bright to-brand-deep" />
                    {section.heading}
                  </h2>
                  {section.body && (
                    <p className="mt-4 leading-relaxed text-mist/80">{section.body}</p>
                  )}
                  {section.bullets && (
                    <ul className="mt-5 space-y-3.5">
                      {section.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-bright">
                            <CheckIcon className="h-3 w-3" />
                          </span>
                          <p className="text-sm leading-relaxed text-mist/70 sm:text-base">
                            {b.title && (
                              <span className="font-bold text-white">{b.title}: </span>
                            )}
                            {b.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}

            {/* gallery */}
            {project.gallery && (
              <Reveal>
                <section>
                  <h2 className="flex items-center gap-3 text-xl font-bold text-white">
                    <span className="h-6 w-1 rounded-full bg-gradient-to-b from-brand-bright to-brand-deep" />
                    {project.galleryTitle ?? "تصاویر پروژه"}
                  </h2>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {project.gallery.map((g, i) => (
                      <figure
                        key={i}
                        className={`glass overflow-hidden rounded-2xl ${
                          i === 0 ? "sm:col-span-2" : ""
                        }`}
                      >
                        <Image
                          src={g.src}
                          alt={g.caption}
                          width={1200}
                          height={700}
                          className="w-full object-cover"
                        />
                        <figcaption className="px-4 py-3 text-center text-sm text-mist/55">
                          {g.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}
          </div>

          {/* sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={0.1}>
              <div className="glass rounded-3xl p-6">
                <h3 className="text-base font-bold text-white">اطلاعات پروژه</h3>
                <dl className="mt-4 space-y-3.5">
                  {project.info.map((row) => (
                    <div key={row.label} className="flex items-start justify-between gap-4 text-sm">
                      <dt className="shrink-0 text-mist/60">{row.label}</dt>
                      <dd className="text-left font-semibold text-white">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            {project.links && project.links.length > 0 && (
              <Reveal delay={0.16}>
                <div className="glass rounded-3xl p-6">
                  <h3 className="text-base font-bold text-white">مشاهده آنلاین</h3>
                  <div className="mt-4 space-y-3">
                    {project.links.map((l) => (
                      <div key={l.label}>
                        {l.href === "#" ? (
                          <span className="btn-ghost w-full cursor-default px-5 py-3 text-sm opacity-70">
                            {l.label}
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                        ) : (
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className={`${
                              l.primary ? "btn-brand" : "btn-ghost"
                            } w-full px-5 py-3 text-sm`}
                          >
                            {l.label}
                            <ExternalIcon className="h-4 w-4" />
                          </a>
                        )}
                        {l.note && (
                          <p className="mt-1.5 text-center text-[11px] text-mist/60">{l.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal delay={0.22}>
              <div className="glass rounded-3xl p-6">
                <h3 className="text-base font-bold text-white">تکنولوژی‌ها</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techs.map((t) => (
                    <span
                      key={t}
                      className="ltr rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-mist/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="rounded-3xl border border-dashed border-brand/30 bg-brand/5 p-6 text-center">
                <p className="text-sm leading-relaxed text-mist/70">
                  پروژه مشابهی در ذهن دارید؟
                </p>
                <Link href="/#contact" className="btn-brand mt-4 w-full px-5 py-3 text-sm">
                  بیایید صحبت کنیم
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* footer nav */}
        <Reveal>
          <div className="mt-20 flex justify-center border-t border-white/8 pt-10">
            <Link href="/#projects" className="btn-ghost px-7 py-3.5 text-sm">
              بازگشت به لیست پروژه‌ها
              <ArrowLeftIcon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
