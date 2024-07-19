'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const projectsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectsChildVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: 'ease',
      duration: 0.5,
    },
  },
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='mt-4 mx-4 mb-8'>
      <motion.div
        className='flex gap-4 items-center mt-4'
        variants={projectsContainerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.div variants={projectsChildVariants}>
          <Link
            href='/'
            className={`flex items-center justify-start gap-2 underline-offset-4 hover:underline ${
              pathname === '/' && 'underline underline-offset-4 font-bold'
            }`}
          >
            {/* <HiHome size={20} /> */}
            Home
          </Link>
        </motion.div>
        <motion.div variants={projectsChildVariants}>
          <Link
            href='/about'
            className={`flex items-center justify-start gap-2 underline-offset-4 hover:underline ${
              pathname === '/about' && 'underline underline-offset-4 font-bold'
            }`}
          >
            {/* <HiInformationCircle size={20} /> */}
            About
          </Link>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
