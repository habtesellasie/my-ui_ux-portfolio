'use client';
import { HiHome } from 'react-icons/hi';
import { HiInformationCircle } from 'react-icons/hi2';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='mt-4 mx-4 mb-8'>
      <div className='flex gap-4 items-center mt-4'>
        <Link
          href='/'
          className={`flex items-center justify-start gap-2 underline-offset-4 hover:underline ${
            pathname === '/' && 'underline underline-offset-4 font-bold'
          }`}
        >
          {/* <HiHome size={20} /> */}
          Home
        </Link>
        <Link
          href='/about'
          className={`flex items-center justify-start gap-2 underline-offset-4 hover:underline ${
            pathname === '/about' && 'underline underline-offset-4 font-bold'
          }`}
        >
          {/* <HiInformationCircle size={20} /> */}
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
