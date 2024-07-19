'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projectsChildVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <>
      <header className='container mx-auto'>
        <motion.div
          className='flex items-center gap-4'
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href='/'>
            <Image
              src='/hero-img-square.jpeg'
              alt='hero image'
              width={50}
              height={50}
              className='size-16 object-cover rounded-full border-[1px] border-black'
            />
          </Link>
          <div>
            <h1 className='text-2xl font-bold'>Habtesellasie Fissha</h1>
            <p className='text-gray-500 font-medium'>UI/UX Designer</p>
          </div>
        </motion.div>

        <motion.div
          className='my-4'
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className='mb-4 font-bold'>Welcome to My UI/UX Portfolio</h2>
          <p className='text-gray-500 text-pretty'>
            I&apos;m a UI/UX designer dedicated to creating intuitive and
            engaging user experiences. With certifications from industry leaders
            such as{' '}
            <span className='inline-block font-medium'>
              <span className='text-[#4285f4]'>G</span>
              <span className='text-[#ea4335]'>o</span>
              <span className='text-[#fbbc04]'>o</span>
              <span className='text-[#4285f4]'>g</span>
              <span className='text-[#34a853]'>l</span>
              <span className='text-[#ea4335]'>e</span>
            </span>
            , <span className='text-[#0081FB] font-medium'>Meta</span>, and{' '}
            <span className='text-[#0f62fe] font-medium'>IBM</span>, I bring a
            blend of creativity and technical expertise to every project. My
            experience in Frontend development further enhances my ability to
            understand and address developer challenges.
            <span className='inline-block pt-2 text-pretty'>
              Explore my portfolio to see how I transform ideas into visually
              appealing and user friendly designs.
            </span>
          </p>
        </motion.div>
        <div className='flex gap-2'>
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href='https://t.me/haabbte'
              target='_blank'
              className='bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 flex items-center justify-center w-fit gap-2 rounded'
            >
              Hire Me
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href='/ui-ux_design_resume.pdf'
              target='_blank'
              className='border bg-transparent hover:bg-zinc-800 hover:text-white transition text-black px-4 py-2 flex items-center justify-center w-fit gap-2 rounded'
            >
              My Resume
            </Link>
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Hero;
