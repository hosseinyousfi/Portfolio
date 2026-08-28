import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const skills = [
  { name: "Python", hint: "زبان اصلی بک‌اند", icon: "devicon-python-plain colored" },
  { name: "Django", hint: "فریم‌ورک قدرتمند وب", icon: "devicon-django-plain", color: "#44B78B" },
  { name: "JavaScript", hint: "تعامل و پویایی", icon: "devicon-javascript-plain colored" },
  { name: "React / Next.js", hint: "فرانت‌اند مدرن", icon: "devicon-react-original colored" },
  { name: "Tailwind CSS", hint: "استایل سریع و تمیز", icon: "devicon-tailwindcss-original colored" },
  { name: "PostgreSQL", hint: "دیتابیس رابطه‌ای", icon: "devicon-postgresql-plain colored" },
  { name: "Redis", hint: "کش و صف پیام", icon: "devicon-redis-plain colored" },
  { name: "Docker", hint: "کانتینر و استقرار", icon: "devicon-docker-plain colored" },
  { name: "Nginx", hint: "وب‌سرور و پراکسی", icon: "devicon-nginx-original colored" },
  { name: "Git", hint: "کنترل نسخه", icon: "devicon-git-plain colored" },
  { name: "Linux", hint: "مدیریت سرور", icon: "devicon-linux-plain", color: "#ffffff" },
  { name: "HTML5 / CSS3", hint: "استاندارد وب", icon: "devicon-html5-plain colored" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="مهارت‌ها"
          title="جعبه ابزار من"
          subtitle="فناوری‌هایی که هر روز با آن‌ها محصولات واقعی می‌سازم."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={(i % 4) * 0.06} className="h-full">
              <div className="glass group flex h-full flex-col items-center justify-center gap-2 rounded-2xl px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_0_20px_2px_rgba(34,211,238,.12)]">
                <i
                  className={`${s.icon} text-4xl transition-transform duration-300 group-hover:scale-110`}
                  style={s.color ? { color: s.color } : undefined}
                  aria-hidden
                />
                <span className="ltr mt-1 text-base font-extrabold text-white transition-colors group-hover:text-brand-bright">
                  {s.name}
                </span>
                <span className="text-xs text-mist/45">{s.hint}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
