'use client';
import { HiHome } from 'react-icons/hi';
import { HiInformationCircle } from 'react-icons/hi2';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <aside className='border-r py-4 border-neutral-300 dark:border-neutral-700 pr-4 h-screen transition w-[10rem] sticky top-0 z-50 mr-4'>
      <div className='ml-3'>
        <Link href='/'>
          <Image
            src='/hero-img-square.JPG'
            alt='hero image'
            width={50}
            height={50}
            className='size-12 object-cover rounded-full border-[1px] border-black'
          />
        </Link>
      </div>
      <nav className='space-y-4 ml-2 mt-2'>
        <div className='flex gap-2 flex-col justify-start items-start'>
          <Link
            href='/'
            className={`flex items-center justify-start gap-2 py-2 px-4 rounded-full hover:dark:text-white hover:bg-white dark:hover:bg-zinc-800 w-fit ${
              pathname === '/' && 'bg-white '
            }`}
          >
            <HiHome size={20} />
            Home
          </Link>
          <Link
            href='/about'
            className={`flex items-center justify-start gap-2 py-2 px-4 rounded-full hover:dark:text-white hover:bg-white dark:hover:bg-zinc-800 w-fit ${
              pathname === '/about' && 'bg-white '
            }`}
          >
            <HiInformationCircle size={20} />
            About
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
