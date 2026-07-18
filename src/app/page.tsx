import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main>
      <Background />
      <Header />
      <Hero />
      <Stats />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
