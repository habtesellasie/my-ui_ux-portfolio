'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='mt-4 mx-4 mb-8'>
      <div className='flex gap-4 items-center mt-4'>
        <div>
          <Link
            href='/'
            className={`flex items-center justify-start gap-2 underline-offset-4 hover:underline ${
              pathname === '/' && 'underline underline-offset-4 font-bold'
            }`}
          >
            {/* <HiHome size={20} /> */}
            Home
          </Link>
        </div>
        <div>
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
      </div>
    </nav>
  );
};

export default Navbar;
