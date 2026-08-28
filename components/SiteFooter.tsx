import Link from "next/link";
import Image from "next/image";
import { navLinks, site } from "@/lib/site";
import { GithubIcon, InstagramIcon, PhoneIcon, TelegramIcon } from "@/components/icons";

const socials = [
  { href: `tel:${site.phone}`, label: "تماس", Icon: PhoneIcon },
  { href: site.telegram, label: "تلگرام", Icon: TelegramIcon },
  { href: site.instagram, label: "اینستاگرام", Icon: InstagramIcon },
  { href: site.github, label: "گیت‌هاب", Icon: GithubIcon },
];

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/8 pt-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-center justify-between gap-10 border-b border-white/8 pb-12 md:flex-row md:items-start">
          <div className="text-center md:text-right">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/images/logo.webp"
                alt="Codevo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-xl object-cover"
              />
              <span className="ltr text-lg font-extrabold text-white">Codevo</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist/55">
              توسعه‌دهنده فول‌استک وب، متخصص در جنگو و پایتون. تبدیل ایده‌های شما
              به محصولات دیجیتال قدرتمند.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-mist/60 transition-colors hover:text-brand-bright"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-mist/60 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand-bright"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center py-7 text-center">
          <p className="text-sm text-mist/45">
            © {new Date().getFullYear()} Codevo. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
