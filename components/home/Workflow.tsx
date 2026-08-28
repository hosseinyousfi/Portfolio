"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    n: "01",
    title: "کشف و تحلیل",
    desc: "درک عمیق اهداف پروژه و نیازهای شما برای تدوین یک نقشه راه دقیق و شفاف.",
  },
  {
    n: "02",
    title: "طراحی و معماری",
    desc: "طراحی رابط کاربری (UI/UX) و معماری فنی سیستم برای عملکرد بهینه.",
  },
  {
    n: "03",
    title: "توسعه و پیاده‌سازی",
    desc: "کدنویسی تمیز، قابل نگهداری و مقیاس‌پذیر برای بک‌اند و فرانت‌اند.",
  },
  {
    n: "04",
    title: "تست و استقرار",
    desc: "آزمایش کامل پروژه برای تضمین کیفیت و استقرار نهایی روی سرور تولید.",
  },
];

export default function Workflow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 55%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="workflow" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="روند کاری"
          title="از ایده تا اجرا در ۴ گام شفاف"
          subtitle="هر پروژه با یک مسیر مشخص و قابل پیش‌بینی جلو می‌رود، بدون ابهام و غافلگیری."
        />

        <div ref={ref} className="relative mt-16">
          {/* rail */}
          <div className="absolute right-6 top-0 bottom-0 w-px bg-white/10 sm:right-1/2" />
          <motion.div
            style={{ scaleY: fill }}
            className="absolute right-6 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-brand-bright to-brand-deep sm:right-1/2"
          />

          <div className="space-y-10 sm:space-y-16">
            {steps.map((step, i) => (
              <Reveal
                key={step.n}
                direction={i % 2 === 0 ? "right" : "left"}
                className="relative"
              >
                <div
                  className={`flex items-start gap-6 pr-14 sm:w-1/2 sm:pr-0 ${
                    i % 2 === 0 ? "sm:pl-12" : "sm:mr-auto sm:pr-12"
                  }`}
                >
                  <div className="glass w-full rounded-3xl p-6 transition-shadow duration-300 hover:shadow-[0_0_24px_2px_rgba(34,211,238,.12)]">
                    <span className="ltr text-sm font-black tracking-widest text-brand-bright/70">
                      {step.n}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist/60">{step.desc}</p>
                  </div>
                </div>
                {/* node */}
                <span className="absolute right-6 top-8 flex h-4 w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center sm:right-1/2">
                  <span className="absolute h-4 w-4 rounded-full bg-brand/25" />
                  <span className="relative h-2 w-2 rounded-full bg-brand-bright" />
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
