import Image from "next/image";
import Slider from "react-slick";

const ImagesSlide = ({ item }: any) => {
    if (!item || !Array.isArray(item.images)) {
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
            <div className="md:max-w-[50%] max-w-[94%]">
                <div className="slider-container ml-8">
                    <Slider {...settings}>
                        {item.images.length > 1 ? (
                            item.images.map((elem: any, ind: number) => (
                                <div key={ind} className="h-[140px] w-[140px] py-4">
                                    <Image src={elem} alt="img" width={300} height={300} className="w-full h-full object-contain" />
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
