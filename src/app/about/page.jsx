import Image from 'next/image';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { siteConfig } from '@/data';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

const About = () => {
  return (
    <>
      <div className='max-w-2xl mx-auto'>
        <Navbar />
        <main className='mx-4'>
          <section className='flex items-center sm:gap-2'>
            <div>
              <div className='flex items-center gap-4'>
                <Image
                  src='/hero-img-square.jpeg'
                  alt='hero image'
                  width={50}
                  height={50}
                  className='size-16 object-cover rounded-full border-[1px] border-black small:hidden'
                />
                <div className='flex flex-col'>
                  <h1 className='text-2xl font-bold'>
                    Hello there, I&apos;m Habtesellasie Fissha
                  </h1>
                  <p className='text-gray-500 font-medium small:hidden'>
                    I Specialized in UI/UX Design
                  </p>
                </div>
              </div>
              <p className='text-gray-500 font-medium small:block hidden'>
                I Specialized in UI/UX Design
              </p>
              <p className='text-gray-500 mt-4 text-pretty'>
                I love creating intuitive and engaging user experiences. With a
                solid background in design principles and design in my DNA, I
                aim to deliver high-quality designs that meet user needs and
                business goals. My skills include wireframing, prototyping, user
                research, visual design and many many more. I&apos;m always
                excited to learn new things and keep up with the latest trends
                in the industry.
                <span className='inline-block py-2'>
                  Spoiler alert: I also love coding! One of the reasons I&apos;m
                  so into designing is because I can bring my designs to life
                  with my frontend development skills.
                </span>
              </p>
            </div>
            <Image
              src='/hero-img-transparent-large.png'
              alt='hero image'
              width={189}
              height={346}
              className='small:block hidden'
            />
          </section>

          <p className='text-gray-500 mt-2 text-pretty'>
            I have honed my UI/UX design skills through courses offered by{' '}
            <span className='inline-block font-medium'>
              <span className='text-[#4285f4]'>G</span>
              <span className='text-[#ea4335]'>o</span>
              <span className='text-[#fbbc04]'>o</span>
              <span className='text-[#4285f4]'>g</span>
              <span className='text-[#34a853]'>l</span>
              <span className='text-[#ea4335]'>e</span>
            </span>
            , <span className='text-[#0081FB] font-medium'>Meta</span>, and{' '}
            <span className='text-[#0f62fe] font-medium'>IBM</span>, and
            Scrimba. Additionally, I hold a degree in Information Technology,
            which has provided me with a strong technical foundation. My
            dedication to learning and growing is unwavering, and I am always on
            the lookout for new opportunities to expand my knowledge and improve
            my craft.
          </p>

          <p className='text-gray-500 mt-4'>
            I&apos;m bad at answering{' '}
            <Link
              href='tel:0945596959'
              className='text-gray-700 font-medium hover:underline'
            >
              phone calls
            </Link>{' '}
            because only when I am not busy can anyone find me. However,
            I&apos;m known to be active on my{' '}
            <Link
              href={siteConfig.links.telegram}
              target='_blank'
              className='text-gray-700 font-medium hover:underline'
            >
              Telegram.
            </Link>{' '}
            I&apos;m also active on{' '}
            <Link
              href={siteConfig.links.linkedin}
              target='_blank'
              className='text-gray-700 font-medium hover:underline'
            >
              LinkedIn.
            </Link>{' '}
            I regularly post things there. I prefer someone to{' '}
            <Link
              href={`mailto:${siteConfig.links.email}`}
              target='_blank'
              className='text-gray-700 font-medium hover:underline'
            >
              email
            </Link>{' '}
            me about work rather than to DM me.
          </p>

          <Link
            href='/ui-ux_design_resume.pdf'
            target='_blank'
            className='mt-4 mb-2 border hover:bg-transparent bg-zinc-800 text-white transition hover:text-black px-4 py-2 flex items-center justify-center w-fit gap-2 rounded'
          >
            My Resume
          </Link>
          <Skills />
          <Contact />
          <p className='text-gray-500 mt-6 text-pretty'>
            I designed and developed this website myself.
          </p>
        </main>
      </div>
    </>
  );
};

export default About;
