import Image from 'next/image';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
      <div className='max-w-2xl mx-auto'>
        <Navbar />
        <main className='mx-4 mt-4'>
          <section>
            <Hero />
            <Projects />
          </section>
        </main>
      </div>
    </>
  );
}
