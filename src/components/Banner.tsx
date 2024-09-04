/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { Button } from './ui/moving-border';
import Link from 'next/link';
const Banner = () => {
    const words = [
        {
            text: "Featured",
        },
        {
            text: "Product",
        },
    ];
    return (
        <section className='relative bg-[#f3f4f6] pt-10  md:pt-10'>
            <div className='max-w-[92%] mx-auto'>
                <div className='flex md:flex-row flex-col justify-between'>
                    <div className='md:max-w-[60%] md:mt-24'>
                        <TypewriterEffectSmooth words={words} />
                        <h1 className='text-4xl md:text-7xl font-bold'>Perfect Fashion Unique Dress</h1>
                        <p className='max-w-[95%] md:max-w-[70%] text-gray-500 mt-6'>Our collection of unique dresses is designed to make you stand out, no matter the occasion. Whether you're looking for a chic evening gown, a trendy casual outfit, or something that perfectly reflects your personal style, you'll find it here. </p>
                        <div className='mt-6'>
                            <Link href='/shop'>
                                <Button borderRadius='1.75rem' className="bg-[#0F172A] dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800">Shop Now</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='relative mt-20 md:mt-32'>
                        <span className='md:block hidden absolute bottom-0 w-[280px] h-[250px] right-8 bg-[#EAEDF6]'></span>
                        <span className='md:block hidden absolute -top-[167px] w-[280px] h-[250px] right-10 bg-[#C9D1F3]'></span>
                        <span className='absolute md:mx-0 mx-auto  bottom-0 left-0 right-0 -top-6 md:-left-6 bg-[#6B759E] rounded-full md:w-[400px] md:h-[400px] w-[350px] h-[360px] z-0'></span>
                        <Image src='/bannerimg1.png' alt='img' width={300} height={300} className='relative z-10 mx-auto md:mx-0 md:w-[350px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner