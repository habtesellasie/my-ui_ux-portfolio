import Image from 'next/image';
import Navbar from './Navbar';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <header className='container mx-auto'>
        <div className='flex items-center gap-4'>
          <Link href='/'>
            <Image
              src='/hero-img-square.JPG'
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
        </div>

        <div className='my-4'>
          <h2 className='mb-4 font-bold'>Welcome to My UI/UX Portfolio</h2>
          <p className='text-gray-500 text-pretty'>
            I&apos;m a UI/UX designer dedicated to creating intuitive and
            engaging user experiences. With certifications from industry leaders
            such as{' '}
            <p className='inline-block font-medium'>
              <span className='text-[#4285f4]'>G</span>
              <span className='text-[#ea4335]'>o</span>
              <span className='text-[#fbbc04]'>o</span>
              <span className='text-[#4285f4]'>g</span>
              <span className='text-[#34a853]'>l</span>
              <span className='text-[#ea4335]'>e</span>
            </p>
            , <span className='text-[#0081FB] font-medium'>Meta</span>, and{' '}
            <span className='text-[#0530AD] font-medium'>IBM</span>, I bring a
            blend of creativity and technical expertise to every project. My
            experience in Frontend development further enhances my ability to
            understand and address developer challenges.
            <span className='inline-block pt-2 text-pretty'>
              Explore my portfolio to see how I transform ideas into visually
              appealing and user friendly designs.
            </span>
          </p>
        </div>
        <div className='flex gap-2'>
          <Link
            href='https://www.linkedin.com/in/habtesellasie'
            target='_blank'
            className='bg-[#0a66c2] hover:bg-[#0a66c2df] text-white px-4 py-2 flex items-center justify-center w-fit gap-2 rounded'
          >
            Follow me on <FaLinkedinIn />
          </Link>
          <Link
            href='mailto:havecodesoft@gmail.com?subject=Hey%20Habte%2C%20I%20would%20like%20to%20tell%20you%20that%20you%20are%20hired!'
            className='bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 flex items-center justify-center w-fit gap-2 rounded'
          >
            Hire me
          </Link>
          <Link
            href='https://t.me/haabbte'
            target='_blank'
            className='bg-[#24A1DE] hover:bg-[#24a0deec] text-white px-4 py-2 flex items-center justify-center w-fit gap-2 rounded'
          >
            Text Me
          </Link>
        </div>
      </header>
    </>
  );
};

export default Hero;
