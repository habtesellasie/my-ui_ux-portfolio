import Image from 'next/image';
import Link from 'next/link';

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
            <span className='inline-block font-medium'>
              <span className='text-[#4285f4]'>G</span>
              <span className='text-[#ea4335]'>o</span>
              <span className='text-[#fbbc04]'>o</span>
              <span className='text-[#4285f4]'>g</span>
              <span className='text-[#34a853]'>l</span>
              <span className='text-[#ea4335]'>e</span>
            </span>
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
            href='https://t.me/haabbte'
            target='_blank'
            className='bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 flex items-center justify-center w-fit gap-2 rounded'
          >
            Hire Me
          </Link>
          <Link
            href='/ui-ux_design_resume.pdf'
            target='_blank'
            className='border bg-transparent hover:bg-zinc-800 hover:text-white transition text-black px-4 py-2 flex items-center justify-center w-fit gap-2 rounded'
          >
            My Resume
          </Link>
        </div>
      </header>
    </>
  );
};

export default Hero;
