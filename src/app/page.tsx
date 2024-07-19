import Image from 'next/image';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Skills from './components/Skills';

export default function Home() {
  return (
    <>
      <div className='max-w-2xl mx-auto'>
        <Navbar />
        <main className='mx-4 mt-4'>
          <section>
            <Hero />
            <Certificates />
            <Projects />
            <Skills />
          </section>
        </main>
      </div>
    </>
  );
}
