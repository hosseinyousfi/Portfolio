export type ProjectSection = {
  heading: string;
  body?: string;
  bullets?: { title?: string; text: string }[];
};

export type ProjectLink = {
  label: string;
  href: string;
  note?: string;
  primary?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  card: {
    title: string;
    tagline: string;
    image: string;
    tags: string[];
  };
  badges: string[];
  description: string;
  sections: ProjectSection[];
  info: { label: string; value: string }[];
  techs: string[];
  links?: ProjectLink[];
  gallery?: { src: string; caption: string }[];
  galleryTitle?: string;
};

export const projects: Project[] = [
  {
    slug: "fashion-shop",
    title: "فروشگاه اینترنتی مد و پوشاک",
    card: {
      title: "فروشگاه آنلاین پوشاک",
      tagline:
        "سامانه فروش پوشاک با مدیریت آسان، فیلترهای هوشمند، دسته‌بندی پویا و تجربه خرید روان.",
      image: "/images/project-fashion.webp",
      tags: ["Django", "PostgreSQL", "Tailwind"],
    },
    badges: ["MVP", "E-commerce", "دموی استاتیک"],
    description:
      "نسخهٔ نمایشی یک MVP برای نمایش جریان خرید آنلاین و قابلیت‌های کلیدی: فیلتر محصولات، نمایش متغیرها (سایز/رنگ)، سبد خرید سمت کلاینت و دستیار هوشمند نمایشی. این دمو برای ارائهٔ قابلیت‌ها به مشتری طراحی شده و با توسعهٔ آتی قابل تبدیل به محصول کامل و متصل به سرور است.",
    sections: [
      {
        heading: "هدف پروژه",
        body: "هدف ارائهٔ یک دموی MVP استاتیک بود تا مشتریان و ذی‌نفعان بتوانند جریان سفارش، رابط کاربری و قابلیت‌های پیشنهادی مبتنی بر هوش مصنوعی را مشاهده کنند. در این نسخه منطق خرید و سبد در سمت کاربر شبیه‌سازی شده تا تجربهٔ نهایی و نیازمندی‌های فنی برای پیاده‌سازی تولیدی مشخص و قابل تصمیم‌گیری باشد.",
      },
      {
        heading: "ویژگی‌های کلیدی",
        bullets: [
          {
            title: "فیلترینگ پیشرفته",
            text: "جستجو و فیلتر بر اساس سایز، رنگ، برند و قیمت برای ارزیابی UX.",
          },
          {
            title: "نمایش محصولات متغیر",
            text: "مدل‌سازی Variantها (رنگ/سایز) و نحوهٔ نمایش در صفحات محصول.",
          },
          {
            title: "سبد خرید سمت کلاینت",
            text: "مدیریت سبد در مرورگر برای بررسی تجربهٔ کاربر و جریان سفارش بدون نیاز به سرور.",
          },
          {
            title: "دستیار هوشمند نمایشی",
            text: "سناریوهای تعامل و پیشنهاد محصول برای نشان دادن نقش AI در کاهش رهاسازی سبد خرید.",
          },
        ],
      },
      {
        heading: "قابلیت‌هایی که می‌توانم برای شما پیاده‌سازی کنم",
        bullets: [
          { text: "احراز هویت امن (JWT / OAuth) و مدیریت نشست کاربران." },
          { text: "پرداخت آنلاین، یکپارچه‌سازی با درگاه‌های بانکی و مدیریت سفارشات." },
          { text: "همگام‌سازی موجودی به‌صورت Real-time با کاهش فشار روی دیتابیس." },
          { text: "پیشنهادگر مبتنی بر هوش مصنوعی برای شخصی‌سازی تجربهٔ خرید." },
          { text: "چت‌بات واقعی با امکان اتصال به CRM و ثبت تعاملات مشتری." },
          { text: "پنل مدیریت حرفه‌ای برای محصولات متغیر، تخفیف‌ها و گزارش‌های فروش." },
        ],
      },
    ],
    info: [
      { label: "نوع پروژه", value: "MVP" },
      { label: "نقش من", value: "توسعه‌دهنده فول‌استک" },
      { label: "وضعیت", value: "دموی آماده" },
    ],
    techs: [
      "Django",
      "Django REST Framework",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker",
      "AI / Recommendation",
    ],
    links: [
      { label: "دموی فروشگاه پوشاک", href: "/cloth.html", primary: true },
      { label: "دموی فروشگاه آتریا", href: "/e-commerce-demo/index.html" },
    ],
  },
  {
    slug: "digital-menu",
    title: "سامانه منوی دیجیتال هوشمند برای رستوران‌ها",
    card: {
      title: "منوی دیجیتال کافه‌رستوران",
      tagline:
        "منوی QR با قابلیت سفارش‌گیری آنلاین، مدیریت لحظه‌ای قیمت‌ها و پنل مدیریتی قدرتمند.",
      image: "/images/project-menu.webp",
      tags: ["Django", "JavaScript", "PWA"],
    },
    badges: ["Digital Menu", "Smart QR"],
    description:
      "یک راهکار مدرن، سریع و انعطاف‌پذیر برای نمایش منو، مدیریت دسته‌بندی‌ها و تغییر قیمت‌ها بدون چاپ مجدد. مشتری فقط QR را اسکن می‌کند و مستقیماً وارد منوی شما می‌شود.",
    sections: [
      {
        heading: "چالش و هدف",
        body: "منوهای چاپی محدودیت دارند: هزینهٔ چاپ، سختی بروزرسانی قیمت‌ها و ناهماهنگی میان شعب. هدف این پروژه ارائهٔ یک سامانهٔ کاملاً دیجیتال و قابل مدیریت بود که بدون نیاز به اپلیکیشن نصب‌شده، منو را در لحظه در اختیار مشتری قرار دهد.",
      },
      {
        heading: "امکانات کلیدی",
        bullets: [
          {
            title: "QR اختصاصی برای هر میز/شعبه",
            text: "اسکن سریع و ورود مستقیم به منوی دیجیتال با طراحی تمیز و سبک.",
          },
          {
            title: "پنل مدیریت لحظه‌ای",
            text: "افزودن و ویرایش دسته‌بندی، آیتم‌ها، قیمت‌ها، عکس‌ها و وضعیت موجودی بدون نیاز به پشتیبان.",
          },
          {
            title: "رابط کاربری موبایل‌محور",
            text: "طراحی واکنش‌گرا و بهینه برای تجربه سریع مشتری روی گوشی هوشمند.",
          },
          {
            title: "جستجو و فیلتر هوشمند",
            text: "پیدا کردن سریع غذاها، نوشیدنی‌ها و پیشنهادهای ویژه.",
          },
        ],
      },
    ],
    info: [
      { label: "نوع پروژه", value: "وب‌سایت تجاری" },
      { label: "نقش من", value: "توسعه‌دهنده فول‌استک" },
      { label: "وضعیت", value: "در حال استفاده" },
    ],
    techs: ["Python / Django", "JavaScript", "Tailwind CSS", "QR Code Generator"],
    links: [
      {
        label: "مشاهده دموی آنلاین",
        href: "/digital-menu.html",
        note: "نسخه نمایشی — داده‌ها استاتیک هستند",
        primary: true,
      },
      { label: "کافه چوکوبری", href: "https://cafe-chocoberry.ir", note: "پروژه واقعی" },
      {
        label: "مجتمع تفریحی گردشگری پدری",
        href: "https://padri.ir",
        note: "پروژه واقعی",
      },
    ],
  },
  {
    slug: "print-house",
    title: "سیستم یکپارچه مدیریت سفارشات چاپخانه",
    card: {
      title: "سامانه مدیریت چاپخانه",
      tagline:
        "سیستم ثبت سفارش، مدیریت فایل‌های چاپ، پیگیری وضعیت تولید و مدیریت مشتری.",
      image: "/images/project-print.webp",
      tags: ["Django", "Docker", "Celery"],
    },
    badges: ["Desktop App", "Automation", "مدیریت مالی"],
    description:
      "یک نرم‌افزار دسکتاپ قدرتمند بر پایه جنگو برای مدیریت متمرکز سفارشات، مشتریان شرکتی، صدور فاکتور و حسابداری چاپخانه.",
    sections: [
      {
        heading: "صورت مسئله",
        body: "چاپخانه‌ها معمولاً با حجم زیادی از سفارشات ریز و درشت، مشتریان شرکتی با حساب‌های دفتری و نیاز به صدور فاکتورهای رسمی و غیررسمی روبرو هستند. استفاده از اکسل یا کاغذ باعث خطا در محاسبات و گم شدن سوابق می‌شود.",
      },
      {
        heading: "راهکار و ویژگی‌ها",
        body: "این نرم‌افزار با معماری کلاینت-سرور (لوکال) طراحی شده و بدون نیاز به اینترنت کار می‌کند. با استفاده از اسکریپت‌های Batch و VBScript، کاربر نهایی تنها با یک کلیک برنامه را اجرا می‌کند، بدون اینکه درگیر پیچیدگی‌های اجرای پایتون شود.",
        bullets: [
          {
            title: "مدیریت سفارشات شرکتی",
            text: "تعریف شرکت‌ها و اتصال سفارشات به آن‌ها برای محاسبه بدهی و بستانکاری کل.",
          },
          {
            title: "صدور فاکتور خودکار",
            text: "تولید فایل PDF فاکتور با فرمت استاندارد و قابلیت چاپ مستقیم.",
          },
          {
            title: "اجرای آسان (Portable)",
            text: "بسته‌بندی شده با Embedded Python برای اجرا روی هر ویندوز بدون پیش‌نیاز.",
          },
          {
            title: "گزارش‌گیری مالی",
            text: "محاسبه دقیق سود، زیان، دریافتی‌ها و مانده حساب مشتریان.",
          },
        ],
      },
    ],
    info: [
      { label: "پلتفرم", value: "Windows (Local Web App)" },
      { label: "بانک اطلاعاتی", value: "SQLite (قابل ارتقا)" },
      { label: "وضعیت", value: "نسخه نهایی (Production)" },
    ],
    techs: ["Django 5", "Waitress Server", "ReportLab (PDF)", "Batch & VBScript", "Jalali Date"],
    galleryTitle: "تصاویر محیط نرم‌افزار",
    gallery: [
      { src: "/media/order-list.png", caption: "لیست سفارشات با قابلیت فیلتر پیشرفته" },
      { src: "/media/order-list1.png", caption: "پنل مدیریت شرکت‌ها و حسابداری" },
      { src: "/media/factor-page.png", caption: "نمونه فاکتور چاپی تولید شده توسط سیستم" },
    ],
  },
  {
    slug: "water-quality",
    title: "سامانه هوشمند پایش و پیش‌بینی کیفیت آب",
    card: {
      title: "سامانه تحلیل کیفیت آب",
      tagline:
        "پلتفرم تحلیلی مبتنی بر GIS با داده‌کاوی، مدل‌های یادگیری ماشین و داشبوردهای تعاملی.",
      image: "/images/project-water.webp",
      tags: ["Django", "Python", "Pandas"],
    },
    badges: ["GIS System", "Data Science", "Machine Learning"],
    description:
      "یک پلتفرم تحت وب مبتنی‌بر GIS برای پایش، اعتبارسنجی و پیش‌بینی کیفیت آب رودخانه کارون، با استفاده از PostGIS، پردازش داده‌ها و یک ماژول هوش مصنوعی برای پیش‌بینی رفتار آینده پارامترهای کیفی.",
    sections: [
      {
        heading: "چالش و مسئله",
        body: "داده‌های کیفیت آب توسط ایستگاه‌های متعدد در بالادست و پایین‌دست رودخانه کارون ثبت می‌شوند. این داده‌ها اغلب شامل خطاهای سنسوری، مقادیر پرت و تناقض مکانی هستند. تحلیل بدون درنظرگرفتن ساختار هیدرولوژیکی رودخانه و ارتباط ایستگاه‌ها، منجر به تفسیر اشتباه روند کیفیت آب می‌شود.",
      },
      {
        heading: "راهکار فنی و امکانات سیستم",
        body: "سامانه مبتنی بر معماری سه‌لایه طراحی شده و از PostGIS برای تحلیل‌های مکانی و Leaflet برای ارائه یک نقشه تعاملی و دقیق استفاده می‌کند.",
        bullets: [
          {
            title: "اعتبارسنجی هوشمند",
            text: "بررسی سازگاری داده‌ها برای ایستگاه‌های پشت‌سر‌هم (upstream/downstream) و شناسایی جهش‌های غیرمنطقی در پارامترهایی مانند EC و DO.",
          },
          {
            title: "GIS تعاملی",
            text: "نمایش وضعیت لحظه‌ای ایستگاه‌ها، رنگ‌بندی کیفیت، زوم هوشمند و نمایش گراف هیدرولوژیکی رودخانه.",
          },
          {
            title: "تحلیل آماری",
            text: "محاسبه Exceedance Probability، تشخیص داده‌های پرت، میانگین‌گیری وزنی و تحلیل دوره‌ای (روزانه، ماهانه، فصلی).",
          },
          {
            title: "پنل ماژولار",
            text: "DRF برای API مستقل و توسعه آسان اپلیکیشن موبایل یا نسخه سازمانی.",
          },
        ],
      },
      {
        heading: "ماژول هوش مصنوعی و پیش‌بینی",
        body: "این بخش برای پیش‌بینی مقدار آینده پارامترهای کیفیت آب (مانند EC، TDS، DO) طراحی شده است. تمرکز بر پیاده‌سازی و یکپارچه‌سازی مدل‌های از پیش آموزش‌دیده بوده و منطق تبدیل داده‌ها، استانداردسازی، تخمین و اتصال خروجی‌ها به داشبورد توسط سیستم توسعه یافته است.",
        bullets: [
          {
            title: "Pipeline استانداردسازی ورودی",
            text: "پاک‌سازی داده، جایگزینی مقادیر گمشده و نرمال‌سازی ورودی مدل.",
          },
          {
            title: "یکپارچه‌سازی Model Serving",
            text: "اجرای مدل از طریق endpoint اختصاصی در DRF و دریافت پیش‌بینی با latency پایین.",
          },
          {
            title: "پیش‌بینی کوتاه‌مدت",
            text: "نمایش روند ۷، ۱۴ و ۳۰ روز آینده برای پارامترهای حساس.",
          },
          {
            title: "اتصال مستقیم به نقشه",
            text: "نمایش پیش‌بینی هر ایستگاه روی نقشه، همراه با رنگ‌بندی و نمودار trendline.",
          },
        ],
      },
    ],
    info: [
      { label: "نوع سیستم", value: "Web GIS + ML Platform" },
      { label: "پایگاه داده", value: "PostgreSQL + PostGIS" },
      { label: "معماری", value: "Django + DRF + Docker Compose" },
      { label: "ماژول ML", value: "Integrated Pre-trained Models" },
    ],
    techs: [
      "Python / Django",
      "PostGIS",
      "Django REST Framework",
      "Leaflet.js",
      "Chart.js",
      "ML Pipeline",
    ],
    galleryTitle: "بخش‌های سامانه",
    gallery: [
      { src: "/media/water-map.png", caption: "نقشه تعاملی و پراکندگی ایستگاه‌ها" },
      { src: "/media/water-map2.png", caption: "گراف هیدرولوژیکی و وضعیت ایستگاه‌ها" },
      { src: "/media/water-dash.png", caption: "داشبورد تحلیلی و نمودارهای کیفیت" },
      { src: "/media/water-validation.png", caption: "اعتبارسنجی هوشمند داده‌ها" },
      { src: "/media/water-entry.png", caption: "ورود و مدیریت داده‌های ایستگاه" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Cards shown on the home page (including the clinic demo which links out directly) */
export const projectCards = [
  { href: "/projects/fashion-shop/", ...projects[0].card },
  { href: "/projects/digital-menu/", ...projects[1].card },
  {
    href: "/clinic-demo/doctor.html",
    external: true,
    title: "پنل مدیریت نوبت‌دهی کلینیک",
    tagline:
      "سیستم مدیریت داخلی برای کنترل نوبت‌ها، پیامک یادآوری و گزارش‌های روزانه کلینیک.",
    image: "/images/project-clinic.webp",
    tags: ["Django", "Redis", "Celery"],
  },
  { href: "/projects/print-house/", ...projects[2].card },
  { href: "/projects/water-quality/", ...projects[3].card },
];
