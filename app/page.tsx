import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Workflow from "@/components/home/Workflow";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Workflow />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
