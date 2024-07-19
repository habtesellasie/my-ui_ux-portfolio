'use client';

import { certificates } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgLink } from 'react-icons/cg';
import { motion } from 'framer-motion';

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

const Certificates = () => {
  return (
    <section>
      <h2 className='text-2xl font-bold mt-4 sticky z-50 top-0 py-2 bg-white'>
        Certificates
      </h2>
      <p className='mx-auto text-sm pb-4 text-gray-500'>
        If the verification links do not work
        <Link
          href='mailto:havecodesoft@gmail.com'
          className='font-bold hover:text-blue-500'
        >
          {' '}
          email me
        </Link>
        .
      </p>

      <motion.div
        className='grid sm:grid-cols-2 gap-4 sm:gap-2'
        variants={projectsContainerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        {certificates.map((certificate, certIndex) => {
          return (
            <motion.div
              variants={projectsChildVariants}
              key={certIndex}
              className='transition bg-gray-100 border-2 border-gray-400 rounded-lg max-sm:w-full'
            >
              <div className='p-2'>
                <Image
                  src={certificate.image}
                  alt=''
                  className='w-full h-72 sm:h-56 object-cover rounded-md'
                  width={100}
                  height={24}
                  priority
                />
              </div>
              <div className='flex flex-col px-4 py-2 gap-2'>
                <h3 className='font-bold inline-block lg:max-w-[240px] w-full'>
                  {certificate.name}
                </h3>
                <span className='text-md text-gray-600'>
                  By {certificate.instructor}
                </span>

                <Link
                  href={certificate.verification_link}
                  target='_blank'
                  className='text-blue-500 dark:text-blue-400 hover:underline transition underline-offset-2 lg:mb-0 flex items-center gap-[2px] w-fit'
                >
                  verification link <CgLink size={20} />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Certificates;
