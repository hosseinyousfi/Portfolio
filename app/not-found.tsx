import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="ltr text-7xl font-black text-gradient sm:text-8xl">404</p>
      <h1 className="mt-6 text-xl font-bold text-white sm:text-2xl">
        صفحه‌ای که دنبالش بودید پیدا نشد
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-mist/60">
        ممکن است آدرس تغییر کرده یا حذف شده باشد. از صفحه اصلی می‌توانید به همه
        بخش‌ها دسترسی داشته باشید.
      </p>
      <Link href="/" className="btn-brand mt-8 px-7 py-3.5 text-sm">
        بازگشت به صفحه اصلی
      </Link>
    </main>
  );
}
