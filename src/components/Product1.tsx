import { products } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Product1 = () => {
  let count = 0;
  return (
    <section className='relative py-6'>
      <div className='max-w-[92%] mx-auto'>
        <div className='flex md:flex-row flex-col justify-between items-center gap-10'>
          {products.map((elem) => {
            if (count >= 2) return null;
            count++;
            return (
              <div className='md:w-[50%] relative overflow-hidden group' key={elem.id}>
                <div className='relative'>
                  <Image
                    src={elem.img}
                    alt='img'
                    width={570}
                    height={400}
                    className='transition-transform duration-300 transform hover:scale-110'
                  />
                </div>
                <div className='relative'>
                  <button className='absolute bottom-6 rounded-md left-0 right-0 mx-auto bg-white w-[140px] h-[45px] hover:bg-black hover:text-white'>
                    <Link href='/shop-detail'>{elem.productName}</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className='flex mt-6 justify-between items-center gap-12 md:flex-row flex-col'>
          {products.slice(2).map((elem) => {
            return (
              <div className='relative md:w-[25%] overflow-hidden group' key={elem.id}>
                <Image
                  src={elem.img}
                  alt='img'
                  width={250}
                  height={250}
                  className='transition-transform duration-300 hover:scale-110 md:w-[250px] w-[570px]'
                />
                <div>
                  <button className='absolute bottom-6 rounded-md left-0 right-0 mx-auto bg-white w-[140px] h-[45px] hover:bg-black hover:text-white'>
                    <Link href='/'>{elem.productName}</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product1;
