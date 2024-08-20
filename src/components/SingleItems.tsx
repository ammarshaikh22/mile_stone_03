import fetchingData from "@/data/FetchingData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const SingleItem = ({ url }: any) => {
  const [item, setItem] = useState([])
  useEffect(() => {
    const getData = async () => {
      let data = await fetchingData(url)
      setItem(data.products)
      return data
    }
    getData()
  }, [])
  let settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          item.map((elem: any) => {
            return (
              <div key={elem.id} className="border-none mb-4">
                <Link href={`/shop-detail/${elem.id.toString()}`} className="flex justify-center items-center">
                  <Image src={elem.thumbnail} alt="img" width={300} height={300} />
                </Link>
                <div>
                  <h3 className="text-base">{elem.title}</h3>
                  <span className="text-lg font-bold">{elem.price + " " + "$"}</span>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default SingleItem;
