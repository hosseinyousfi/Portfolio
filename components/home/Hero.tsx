"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const codeLines = [
  { c: "text-fuchsia-400", t: "class" },
  { c: "text-sky-300", t: " Project" },
  { c: "text-mist/70", t: "(models.Model):" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-44">
      <div className="absolute inset-0 -z-10 grid-backdrop" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:text-right">
          <motion.div {...fadeUp(0)} className="mb-7 flex justify-center lg:justify-start">
            <div className="relative">
              <span className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-brand-bright via-brand-deep to-brand opacity-60 blur-md" />
              <Image
                src="/images/avatar.webp"
                alt="Codevo — توسعه‌دهنده فول‌استک"
                width={96}
                height={96}
                priority
                className="relative h-24 w-24 rounded-full border-2 border-white/20 object-cover shadow-2xl"
              />
              <span className="absolute bottom-1 left-1 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-4 w-4 rounded-full border-2 border-base bg-emerald-400" />
              </span>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.05)} className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-3.5 py-1.5 text-xs font-semibold text-brand-bright">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            آماده همکاری
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl sm:leading-[1.25] lg:text-5xl xl:text-6xl"
          >
            خلق راهکارهای
            <br />
            <span className="text-gradient">دیجیتال و مدرن</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-mist/80 sm:mt-6 sm:text-lg lg:mx-0"
          >
            من <span className="font-bold text-white">Codevo</span> هستم. ایده
            شما را به یک محصول دیجیتال واقعی تبدیل می‌کنم؛ از فروشگاه اینترنتی
            تا سامانه اختصاصی کسب‌وکارتان. شما روی رشد کسب‌وکار تمرکز کنید،
            ساده‌سازی و حل پیچیدگی‌ها با من.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link href="/#projects" className="btn-brand group w-full px-7 py-3.5 text-base sm:w-auto">
              مشاهده نمونه‌کارها
              <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l6 6m-6-6l6-6" />
              </svg>
            </Link>
            <Link href="/#contact" className="btn-ghost w-full px-7 py-3.5 text-base sm:w-auto">
              شروع همکاری
            </Link>
          </motion.div>
        </div>

        {/* Code card */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 32, scale: reduce ? 1 : 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-lg sm:block"
        >
          <div className="glass-strong ltr overflow-hidden rounded-3xl shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-rose-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="mr-auto font-mono text-xs text-mist/40">models.py — codevo</span>
            </div>
            <pre className="overflow-x-auto p-5 text-left font-mono text-[13px] leading-7">
              <code>
                <span className="text-fuchsia-400">from</span>
                <span className="text-mist/80"> django.db </span>
                <span className="text-fuchsia-400">import</span>
                <span className="text-mist/80"> models</span>
                {"\n\n"}
                {codeLines.map((l, i) => (
                  <span key={i} className={l.c}>{l.t}</span>
                ))}
                {"\n"}
                <span className="text-mist/70">    title = models.</span>
                <span className="text-sky-300">CharField</span>
                <span className="text-mist/70">(max_length=</span>
                <span className="text-amber-300">100</span>
                <span className="text-mist/70">)</span>
                {"\n"}
                <span className="text-mist/70">    stack = </span>
                <span className="text-emerald-300">[&quot;Django&quot;, &quot;Next.js&quot;]</span>
                {"\n"}
                <span className="text-mist/70">    quality = </span>
                <span className="text-amber-300">100</span>
                {"\n\n"}
                <span className="text-mist/40"># ideas → products, shipped 🚀</span>
              </code>
            </pre>
          </div>

          {/* floating chips */}
          <motion.div
            animate={reduce ? {} : { y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-5 top-10 hidden items-center gap-2 rounded-2xl px-4 py-2.5 lg:flex"
          >
            <span className="text-lg">⚡</span>
            <span className="text-sm font-bold text-white">عملکرد سریع</span>
          </motion.div>
          <motion.div
            animate={reduce ? {} : { y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -bottom-5 -right-4 hidden items-center gap-2.5 rounded-2xl px-4 py-2.5 lg:flex"
          >
            <Image src="/images/avatar.webp" alt="Codevo" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
            <div className="text-right">
              <p className="text-xs font-bold text-white">Full-Stack Developer</p>
              <p className="text-[11px] text-mist/50">Python · Django · Next.js</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
