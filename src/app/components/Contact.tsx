import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <section>
      <div>
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
    </section>
  );
};

export default Contact;
