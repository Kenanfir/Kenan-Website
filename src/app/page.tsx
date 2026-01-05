import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Experiences from '@/components/Experiences';
import Skills from '@/components/Skills';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Education />
        <Experiences />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
