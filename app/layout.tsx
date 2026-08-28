import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "devicon/devicon.min.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ChatWidget from "@/components/ChatWidget";
import BackToTop from "@/components/BackToTop";
import AmbientBackground from "@/components/AmbientBackground";

// Self-hosted variable font (fast + reliable, no Google Fonts dependency)
const vazirmatn = localFont({
  src: "./fonts/Vazirmatn-Variable.woff2",
  weight: "100 900",
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codeevo.ir"),
  title: {
    default: "Codevo | توسعه‌دهنده وب‌سایت‌های مدرن",
    template: "%s | Codevo",
  },
  description:
    "کدوو (Codevo) — توسعه‌دهنده فول‌استک وب. طراحی سایت، فروشگاه اینترنتی و وب‌اپلیکیشن‌های اختصاصی با جنگو (Django) و پایتون. مشاوره و اجرای پروژه‌های نرم‌افزاری.",
  keywords: [
    "طراحی سایت",
    "برنامه نویسی وب",
    "جنگو",
    "Django",
    "پایتون",
    "Python",
    "طراحی فروشگاه اینترنتی",
    "سئو سایت",
    "Codevo",
  ],
  authors: [{ name: "Codevo" }],
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo.webp" },
  openGraph: {
    title: "Codevo | توسعه‌دهنده وب‌سایت‌های مدرن",
    description:
      "طراحی و توسعه وب‌سایت‌ها و وب‌اپلیکیشن‌های مدرن با جنگو و پایتون.",
    type: "website",
    images: ["/images/logo.webp"],
    locale: "fa_IR",
  },
};

export const viewport: Viewport = {
  themeColor: "#05080f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="bg-base font-sans text-mist antialiased">
        <AmbientBackground />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ChatWidget />
        <BackToTop />
      </body>
    </html>
  );
}
