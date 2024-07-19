import { siteConfig } from '@/data';
import Link from 'next/link';
import React from 'react';
import { BiPhone } from 'react-icons/bi';
import { BsPhone, BsTelegram, BsTwitterX } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <section className='mt-3'>
      <h2 className='text-2xl font-bold mb-2 sticky z-50 top-0 py-2 bg-white'>
        Contact
      </h2>
      <div className='flex flex-wrap items-center gap-3'>
        <Link
          className='hover:scale-[1.05] bg-zinc-200 hover:bg-zinc-100 hover:outline hover:outline-gray-300 hover:outline-offset-0 rounded transition size-10 flex items-center justify-center'
          href={siteConfig.links.telegram}
          target='_blank'
          // className='bg-[#24A1DE] hover:bg-[#24a0deec] text-white px-4 py-2 flex items-center justify-center w-fit gap-2 rounded'
        >
          <BsTelegram size={23} fill='#24A1DE' />
        </Link>
        <Link
          className='hover:scale-[1.05] bg-zinc-200 hover:bg-zinc-100 hover:outline hover:outline-gray-300 hover:outline-offset-0 rounded transition size-10 flex items-center justify-center'
          href='mailto:havecodesoft@gmail.com'
          // className='bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 flex items-center justify-center w-fit gap-2 rounded'
        >
          <MdEmail size={28} />
        </Link>
        <Link
          className='hover:scale-[1.05] bg-zinc-200 hover:bg-zinc-100 hover:outline hover:outline-gray-300 hover:outline-offset-0 rounded transition size-10 flex items-center justify-center'
          href={siteConfig.links.linkedin}
          target='_blank'
          // className='bg-[#0a66c2] hover:bg-[#0a66c2df] text-white px-4 py-2 flex items-center justify-center w-fit gap-2 rounded'
        >
          <FaLinkedinIn size={25} fill='#0a66c2' />
        </Link>
        <Link
          className='hover:scale-[1.05] bg-zinc-200 hover:bg-zinc-100 hover:outline hover:outline-gray-300 hover:outline-offset-0 rounded transition size-10 flex items-center justify-center'
          href='tel:0945596959'
          target='_blank'
          // className='bg-[#0a66c2] hover:bg-[#0a66c2df] text-white px-4 py-2 flex items-center justify-center w-fit gap-2 rounded'
        >
          <BsPhone strokeWidth={0.5} size={22} />
        </Link>
        <Link
          className='hover:scale-[1.05] bg-zinc-200 hover:bg-zinc-100 hover:outline hover:outline-gray-300 hover:outline-offset-0 rounded transition size-10 flex items-center justify-center'
          href={siteConfig.links.x}
          target='_blank'
          // className='bg-[#0a66c2] hover:bg-[#0a66c2df] text-white px-4 py-2 flex items-center justify-center w-fit gap-2 rounded'
        >
          <BsTwitterX size={20} />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
