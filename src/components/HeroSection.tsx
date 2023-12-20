import React from 'react';
import { nft1, nft2, nft3 } from '../assets/images';

const HeroSection = () => {
  return (
    <section className='mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8'>
      <div className='space-y-4 flex-1 sm:text-center lg:text-left'>
        <h1 className='text-gray-800 font-bold text-4xl xl:text-5xl'>
          DISCOVER, AND COLLECT DIGITAL ART
          <span className='text-indigo-600'> NFT</span>S
        </h1>
        <p className='text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0'>
          Digital marketplace for crypto collectibles and non-fungible tokens
          (NFTs). Buy, sell, and discover exclusive digital assets.
        </p>
        <div className='pt-3'>
          <a
            href='/'
            className='px-5 py-3 text-white bg-indigo-600 rounded-full duration-150 hover:bg-white border border-indigo-600 hover:text-gray-700 active:shadow-lg'>
            Explore Now
          </a>
        </div>
        <div className='pt-3 flex items-center justify-left space-x-4 md:space-x-8'>
          <div className='flex items-center flex-col'>
            <div className='text-3xl font-bold'>98K+</div>
            <span className='text-gray-500'>Artwork</span>
          </div>
          <div className='flex items-center flex-col'>
            <div className='text-3xl font-bold'>1.2K+</div>
            <span className='text-gray-500'>Auction</span>
          </div>
          <div className='flex items-center flex-col'>
            <div className='text-3xl font-bold'>3.5K+</div>
            <span className='text-gray-500'>Artist</span>
          </div>
        </div>
      </div>
      <div className='flex-1 top-0 left-0 text-center mt-4 lg:mt-0 lg:ml-3'>
        <img
          src={nft1}
          alt='NFT 1'
          className='w-3/6 relative left-20 top-0 z-10 rounded-xl my-auto'
        />
        <img
          src={nft2}
          alt='NFT 2'
          className='w-3/5 relative left-20 -top-40 z-20 rounded-xl my-auto'
        />
        <img
          src={nft3}
          alt='NFT 3'
          className='w-3/4 relative left-20 -top-80 z-30 rounded-xl my-auto'
        />
      </div>
    </section>
  );
};

export default HeroSection;
