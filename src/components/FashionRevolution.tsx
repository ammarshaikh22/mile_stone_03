import { fashionRevolution } from '@/data/data'
import Image from 'next/image'
import React from 'react'

const FashionRevolution = () => {
  return (
    <section className='relative my-20'>
      <div className='max-w-[92%] mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
          <div className='md:w-[50%]'>
            <h3 className=' md:mb-14 leading-snug md:max-w-[90%] text-3xl md:text-4xl font-semibold ml-4'>We brought fashion revolution in the society</h3>
            <div className='md:max-w-[90%]'>
              {
                fashionRevolution.map((elem) => {
                  return (
                    <div key={elem.id} className='flex items-center mt-12 gap-6 justify-center'>
                      <div>
                        <Image src={elem.img} alt={elem.heading} width={100} height={100} />
                      </div>
                      <div>
                        <h4 className='mb-2 text-black font-semibold'>{elem.heading}</h4>
                        <p className='text-gray-400'>{elem.sub}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='md:w-[50%]'>
            <Image src='/speciality-thumb.jpg' alt='img' width={700} height={700} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FashionRevolution