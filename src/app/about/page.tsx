'use client'
import CarouselPage from "@/components/CarouselPage"
import FashionRevolution from "@/components/FashionRevolution"
import HistoryAbout from "@/components/HistoryAbout"
import Policies from "@/components/Policies"
import StyleComp from "@/components/StyleComp"

const AboutPage = () => {
    return (
        <main>
            <StyleComp heading='About' />
            <HistoryAbout />
            <Policies className='flex flex-col text-center items-center justify-center gap-6 md:w-[25%] border border-gray-300 p-12' parentClass='flex md:flex-row flex-col gap-6 items-center' />
            <FashionRevolution/>
            <CarouselPage/>
        </main>
    )
}

export default AboutPage