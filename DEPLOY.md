# راهنمای دیپلوی روی GitHub Pages

سایت جدید با Next.js ساخته شده و خروجی کاملاً استاتیک دارد. دیپلوی خودکار است؛ فقط **یک‌بار** باید فایل workflow را با اکانت خودتان جایگزین کنید (توکن ربات اجازه تغییر workflow ندارد).

## گام ۱ — مرج کردن Pull Request

PR شاخه `arena/01a0467a-portfolio` را در گیت‌هاب باز کنید و **Merge** بزنید تا همه کدها وارد `main` شود.

## گام ۲ — جایگزینی Workflow (فقط یک‌بار، از طریق سایت گیت‌هاب)

1. در ریپو به مسیر `.github/workflows/static.yml` بروید → آیکون سطل زباله → **Delete file** → Commit.
2. **Add file → Create new file** → نام فایل: `.github/workflows/deploy.yml`
3. محتوای زیر را داخلش کپی کنید و Commit بزنید:

```yaml
name: Deploy Next.js site to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "out"

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

با همین Commit، دیپلوی خودکار شروع می‌شود (تب **Actions** را ببینید). بعد از سبز شدن، سایت روی [codeevo.ir](https://codeevo.ir) بالاست. از این به بعد هر push به `main` خودکار دیپلوی می‌شود.

## آدرس‌ها بعد از دیپلوی

| بخش | آدرس |
|---|---|
| صفحه اصلی | `https://codeevo.ir/` |
| ادبستان جم (پروژه شاخص) | `https://codeevo.ir/projects/jam-adabestan/` |
| فروشگاه پوشاک | `https://codeevo.ir/projects/fashion-shop/` |
| منوی دیجیتال | `https://codeevo.ir/projects/digital-menu/` |
| چاپخانه | `https://codeevo.ir/projects/print-house/` |
| کیفیت آب | `https://codeevo.ir/projects/water-quality/` |
| دموی پوشاک | `https://codeevo.ir/cloth.html` |
| دموی فروشگاه آتریا | `https://codeevo.ir/e-commerce-demo/index.html` |
| دموی منوی دیجیتال | `https://codeevo.ir/digital-menu.html` |
| دموی کلینیک | `https://codeevo.ir/clinic-demo/doctor.html` |

## اجرای محلی

```bash
npm install
npm run dev     # توسعه → http://localhost:3000
npm run build   # خروجی استاتیک در پوشه out/
```
