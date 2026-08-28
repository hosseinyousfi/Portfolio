# Codevo Portfolio

پورتفولیوی شخصی [codeevo.ir](https://codeevo.ir) — بازسازی‌شده با **Next.js (App Router) + Tailwind CSS v4 + Framer Motion** به‌صورت خروجی کاملاً استاتیک، مناسب GitHub Pages.

## توسعه محلی

```bash
npm install
npm run dev      # http://localhost:3000
```

## بیلد و خروجی استاتیک

```bash
npm run build    # خروجی در پوشه out/
```

## دیپلوی

با هر push به شاخه `main`، ورک‌فلوی `.github/workflows/deploy.yml` سایت را بیلد کرده و پوشه `out/` را روی GitHub Pages (دامنه codeevo.ir) منتشر می‌کند.

## ساختار

- `app/` — صفحات (صفحه اصلی + صفحات جزئیات پروژه در `app/projects/[slug]/`)
- `components/` — کامپوننت‌های UI (هدر، فوتر، چت‌بات، افکت‌های پس‌زمینه و …)
- `lib/projects.ts` — داده‌ی نمونه‌کارها (برای افزودن پروژه جدید فقط این فایل را ویرایش کنید)
- `public/` — دموهای استاتیک قدیمی (`cloth.html`، `digital-menu.html`، `clinic-demo/`، `e-commerce-demo/`) و تصاویر
