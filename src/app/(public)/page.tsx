'use client'
import Banner from "@/components/Banner";
import CarouselPage from "@/components/CarouselPage";
import Policies from "@/components/Policies";
import Product1 from "@/components/Product1";
import SubscribePage from "@/components/SubscribePage";
import WeeksProduct from "@/components/WeeksProduct";

export default function Home() {
  return (
    <main>
      <Banner />
      <Policies className='flex items-center justify-center gap-4 md:w-[25%]' parentClass='flex md:flex-row flex-col gap-10 items-center'/>
      <Product1 />
      <WeeksProduct />
      <CarouselPage />
      <SubscribePage/>
    </main>
  );
}
