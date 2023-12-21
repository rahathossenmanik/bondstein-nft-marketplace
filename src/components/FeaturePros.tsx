import React from 'react';
import { Icon } from '@iconify/react';

const FeaturePros = () => {
  return (
    <div className='mt-24 bg-indigo-100 px-8 py-16' id='about'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0'>
        <h1 className='me-8 text-4xl font-bold uppercase'>
          The amazing NFT art of the world here
        </h1>
        <div className='flex flex-col md:flex-row items-center md:space-x-16'>
          <div className='flex items-center space-x-4'>
            <Icon icon='mdi:credit-card-check-outline' className='text-8xl' />
            <div>
              <h2 className='text-xl font-semibold'>Fast Transaction</h2>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus imperdiet.
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <Icon
              icon='heroicons-outline:chart-square-bar'
              className='text-8xl'
            />
            <div>
              <h2 className='text-xl font-semibold'>Growth Transaction</h2>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus imperdiet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePros;
