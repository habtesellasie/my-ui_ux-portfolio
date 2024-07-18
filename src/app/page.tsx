import Image from 'next/image';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <div className='max-w-4xl mx-auto flex'>
        <Navbar />
        <section className='mt-4'>
          <Hero />
        </section>
      </div>
    </>
  );
}
