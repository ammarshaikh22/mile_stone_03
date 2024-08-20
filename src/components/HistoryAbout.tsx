/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const HistoryAbout = () => {
  return (
    <section className='relative my-24'>
      <div className='max-w-[92%] md:max-w-[96%] mx-auto'>
        <div className='flex items-center justify-center text-center'>
          <h2 className='text-3xl md:text-5xl font-semibold md:max-w-[80%] mx-auto'>"Uncountable and unrivalled world's largest online and offline fashion house since 1990"</h2>
        </div>
        <div className='flex justify-between items-center mt-16 md:mt-28 gap-12 md:gap-16 md:flex-row flex-col'>
          <div className='relative md:w-[50%]'>
            <Image src='/about-thumb.jpg' alt='img' width={600} height={600} />
            <div className='absolute -bottom-10 -right-8 '>
              <Image src='/year.png' alt='year' width={130} height={130} className='md:block hidden' />
            </div>
          </div>
          <div className='md:w-[50%]'>
            <h3 className='mb-6 leading-snug md:max-w-[90%] text-3xl md:text-4xl font-semibold'>The fashion everything that you want in your life.</h3>
            <p className='leading-relaxed text-gray-500'>We get it. Getting dressed can be hard and we’re here to help with that. Whether you’re more of a casual girl I feel you, give me joggers all day every day or are looking to spice things up for your next date night, you’ve come to the right place. Dig through our piles of posts. Booties, booties, booties rockin’ everywhere! When it comes to Fall and Winter fashion, boots are my weakness. As part of our growth, Roman has launched a new range of shoes and handbags.</p>
            <Button className="w-[200px] px-6 text-white font-bold rounded-sm h-[60px] text-center bg-black hover:bg-transparent hover:text-black border border-black" name="Explore Products" link='/about' divStyle='mt-8' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HistoryAbout