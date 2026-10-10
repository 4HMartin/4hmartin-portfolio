import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
// import Certificates from "@/components/home/Certificates";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      {/*<Certificates />*/}
      <Skills />
      <Contact />
    </>
  );
}
