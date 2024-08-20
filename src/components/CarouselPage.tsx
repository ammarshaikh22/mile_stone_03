import React from 'react'
import CarouselCard from './Carousel'

const CarouselPage = () => {
    return (
        <section className='relative py-10'>
            <div className='max-w-[86%] mx-auto'>
                <div className='flex justify-center'>
                    <CarouselCard />
                </div>
            </div>
        </section>
    )
}

export default CarouselPage