import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const ImagesSlide = ({ item }: any) => {
    const [isArray, setIsArray] = useState(false)
    if (!item || !Array.isArray(item.images)) {
        console.error('Item or images array is undefined or not an array');
        return null;
    }
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <section className="relative pb-10">
            <div className="max-w-[50%]">
                <div className="slider-container ml-8">
                    <Slider {...settings}>
                        {item.images.length > 1 ? (
                            item.images.map((elem: any, ind: number) => (
                                <div key={ind} className="h-[140px] w-[140px] py-4">
                                    <Image src={elem} alt="img" width={300} height={300} className="w-full h-[140px] object-contain" />
                                </div>
                            ))
                        ) : (
                            null
                        )}

                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default ImagesSlide;
