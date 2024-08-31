import fetchingData from '@/data/FetchingData'
import { ClassNames } from '@emotion/react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
const RelatedProduct = ({ item }: any) => {
    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [data, setData] = useState([])
    useEffect(() => {
        if (item?.category) {
            const relatedData = async () => {
                const res = await fetchingData(`https://dummyjson.com/products/category/${item.category}`)
                setData(res.products)
            }
            relatedData()
        }
    }, [item])
    return (
        <section className='relative mt-40 mb-20'>
            <div className='max-w-[94%] mx-auto'>
                <h3 className='text-4xl font-bold'>Related Product</h3>
                <div className="slider-container mt-16">
                    <Slider {...settings}>
                        {
                            data.map((elem: any) => {
                                return (
                                    <div className='flex flex-col justify-center mb-6' key={elem.id}>
                                        <Link href={`/shop/${elem.id.toString()}`} >
                                            <div className='bg-[#F4F4F4] md:w-[255px] w-full h-[330px] flex justify-center items-center'>
                                                <Image src={elem.thumbnail} alt='img' width={500} height={500} />
                                            </div>
                                        </Link>
                                        <div className='mt-4 text-start'>
                                            <h4 className='mb-2 font-semibold'>{elem.title}</h4>
                                            <span className='text-base font-bold'>{elem.price} $</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default RelatedProduct