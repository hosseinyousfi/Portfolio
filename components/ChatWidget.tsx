"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Message = { role: "user" | "bot"; text: string };

const quickReplies = [
  "هزینه پروژه چقدره؟",
  "چقدر طول می‌کشه؟",
  "چطور باهات تماس بگیرم؟",
  "روی چه تکنولوژی‌هایی کار می‌کنی؟",
];

const chatRules: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["قیمت", "هزینه", "تعرفه", "چند تومن", "چقدر می\u200cشه"],
    answer:
      "هزینه هر پروژه بسته به میزان پیچیدگی، قابلیت‌ها و زمان‌بندی متفاوت است. بهترین راه، ارسال توضیح کوتاهی از پروژه از طریق تلگرام یا تماس تلفنی است تا یک برآورد دقیق و شفاف دریافت کنید.",
  },
  {
    keywords: ["زمان", "طول می\u200cکشه", "مدت", "چند روز", "چند هفته"],
    answer:
      "بسته به دامنه پروژه معمولاً بین ۲ تا ۸ هفته زمان می‌برد. پروژه‌های کوچک‌تر سریع‌تر و پروژه‌های سازمانی‌تر با زمان‌بندی دقیق‌تری تحویل داده می‌شوند.",
  },
  {
    keywords: ["تماس", "ارتباط", "شماره", "تلفن", "تلگرام", "چطور بگیرم"],
    answer:
      "می‌تونید از طریق دکمه‌های تماس، تلگرام یا اینستاگرام در پایین صفحه در ارتباط باشید. خوشحال می‌شم درباره پروژه‌تون صحبت کنیم!",
  },
  {
    keywords: ["تکنولوژی", "استک", "زبان", "ابزار", "جنگو", "پایتون", "django", "python"],
    answer:
      "تخصص اصلی من Python و Django برای بک‌اند است، همراه با JavaScript و Tailwind CSS برای فرانت‌اند، PostgreSQL برای دیتابیس و Docker برای استقرار.",
  },
  {
    keywords: ["سلام", "درود", "خسته نباشید", "وقت بخیر"],
    answer: "سلام! خوش اومدید 🌿 چطور می‌تونم درباره خدمات یا پروژه‌تون کمکتون کنم؟",
  },
  {
    keywords: ["نمونه کار", "پروژه قبلی", "کارنامه", "سابقه"],
    answer:
      "نمونه‌کارهای من رو می‌تونید در بخش «نمونه‌کارها» صفحه اصلی ببینید؛ از فروشگاه‌های اینترنتی تا سامانه‌های تحلیلی و مدیریتی.",
  },
];

const fallback =
  "ممنون از پیامتون! برای پاسخ دقیق‌تر و سریع‌تر بهتره مستقیم از طریق تلگرام یا تماس تلفنی در ارتباط باشیم. دکمه‌های تماس رو در پایین صفحه ببینید 😊";

function getBotReply(input: string) {
  const lower = input.toLowerCase();
  for (const rule of chatRules) {
    if (rule.keywords.some((k) => lower.includes(k.toLowerCase()))) return rule.answer;
  }
  return fallback;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [showQuick, setShowQuick] = useState(false);
  const [usedQuick, setUsedQuick] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [tooltip, setTooltip] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setTooltip(true), 4500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, showQuick]);

  useEffect(() => {
    if (!open || started) return;
    setStarted(true);
    setTyping(true);
    // بدون cleanup — تایمر باید حتماً اجرا شود تا پیام خوش‌آمد نمایش داده شود
    window.setTimeout(() => {
      setTyping(false);
      setMessages([
        {
          role: "bot",
          text: "سلام! من دستیار هوشمند Codevo هستم 👋 چطور می‌تونم درباره خدمات یا پروژه‌تون کمکتون کنم؟",
        },
      ]);
      setShowQuick(true);
    }, 700);
  }, [open, started]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setShowQuick(false);
    if (quickReplies.includes(trimmed)) {
      setUsedQuick((u) => [...u, trimmed]);
    }
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "bot", text: getBotReply(trimmed) }]);
      // پیشنهادهای آماده را دوباره نشان بده تا گفتگو «هوشمند» ادامه پیدا کند
      setShowQuick(true);
    }, 800);
  }

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50">
        <AnimatePresence>
          {tooltip && !open && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="glass-strong absolute bottom-full mb-3 w-max max-w-[220px] rounded-xl px-3.5 py-2 text-xs text-white shadow-lg"
            >
              سوالی دارید؟ با من صحبت کنید!
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => {
            setOpen((v) => !v);
            setTooltip(false);
          }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-deep text-white shadow-[0_10px_30px_-6px_rgba(6,182,212,0.7)] transition-transform hover:scale-105"
          aria-label={open ? "بستن گفتگو" : "گفتگو با دستیار Codevo"}
        >
          {!open && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-bright opacity-30" />
          )}
          {open ? (
            <svg className="relative h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="relative h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong fixed bottom-24 left-4 z-50 flex h-[28rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl shadow-2xl sm:left-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3.5">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/logo.webp"
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-lg object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-white">دستیار Codevo</p>
                  <p className="flex items-center gap-1 text-[11px] text-mist/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> آنلاین
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-mist/50 hover:bg-white/10 hover:text-white"
                aria-label="بستن گفتگو"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <p
                    className={`max-w-[80%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-gradient-to-br from-brand to-brand-deep text-white"
                        : "bg-white/8 text-mist/85"
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl bg-white/8 px-4 py-3">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mist/60" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mist/60" style={{ animationDelay: ".2s" }} />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mist/60" style={{ animationDelay: ".4s" }} />
                  </div>
                </div>
              )}

              {showQuick && quickReplies.some((q) => !usedQuick.includes(q)) && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {quickReplies
                    .filter((q) => !usedQuick.includes(q))
                    .map((q) => (
                      <button
                        key={q}
                        onClick={() => send(q)}
                        className="rounded-full border border-brand/25 bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand-bright transition-colors hover:bg-brand/20"
                      >
                        {q}
                      </button>
                    ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                autoComplete="off"
                placeholder="پیام خود را بنویسید..."
                className="min-w-0 flex-1 rounded-full bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-mist/40 focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
              <button
                type="submit"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-deep text-white transition-transform hover:scale-105"
                aria-label="ارسال"
              >
                <svg className="h-4 w-4 -scale-x-100" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
