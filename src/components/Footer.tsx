import React from 'react';

const Footer = () => {
  return (
    <nav className='bg-white border-t'>
      <div className='flex items-center justify-between space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8'>
        <div className='flex-none lg:flex-initial'>
          <a
            className='px-4 py-2 text-indigo-600 text-2xl font-extrabold duration-150 hover:text-indigo-500 active:text-indigo-700'
            href='/'>
            NFTERS
          </a>
        </div>
        <div>&copy; {new Date().getFullYear()} NFTERS</div>
      </div>
    </nav>
  );
};

export default Footer;
