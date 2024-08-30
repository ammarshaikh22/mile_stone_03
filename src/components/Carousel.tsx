import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { carouselData } from '@/data/data'
import Image from 'next/image'
const CarouselCard = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <Carousel className="w-full max-w-full" plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}>
            <CarouselContent>
                {carouselData.map((elem) => (
                    <CarouselItem key={elem.id}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex  items-center justify-center p-6 flex-col">
                                    <h2 className='text-3xl mb-1'>{elem.heading}</h2>
                                    <span className='text-sm text-gray-500'>{elem.subHeading}</span>
                                    <p className='text-xl md:text-2xl text-gray-500 my-8 md:max-w-[90%] italic'>{elem.detail}</p>
                                    <Image src={elem.pic} alt={elem.heading} width={150} height={100} className='rounded-full' />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='md:block hidden' />
            <CarouselNext className='md:block hidden' />
        </Carousel>
    )
}

export default CarouselCard