import { useEffect, useState } from 'react'
import ProductSlider from './ProductSlider'
import fetchingData from '@/data/FetchingData'
import Image from 'next/image'
import Link from 'next/link'

const WeeksProduct = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        const getData = async () => {
            let data = await fetchingData("https://dummyjson.com/products/category/mobile-accessories")
            setItem(data.products)
            return data
        }
        getData()
    }, [])
    let count = 0
    return (
        <section className='relative py-16 md:py-28'>
            <div className='max-w-[92%] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-4xl font-semibold'>Product of the week</h2>
                </div>
                <div className='mt-10 text-center'>
                    <ProductSlider />
                </div>
                <div className='flex justify-between items-center mt-40 gap-8 md:flex-row flex-col'>
                    {
                        item.map((elem: any) => {
                            if (count >= 2) return
                            count++
                            return (
                                <div key={elem.id} className='md:w-[50%] h-[250px] md:h-[280px] p-2 md:p-10 bg-[#F6F6F6] flex justify-center items-center md:gap-2'>
                                    <div>
                                        <h2 className='text-2xl md:text-4xl mb-2'>{elem.title}</h2>
                                        <span className='md:text-lg'>Start From : <span className='font-bold md:text-xl '>{elem.price + " " + "$"}</span></span>
                                        <div className='mt-6'>
                                            <Link href={`/shop/${elem.id}`}>
                                                <button className='w-[120px] h-[40px] px-2 bg-transparent border-2 border-black rounded-sm hover:bg-black hover:text-white'>Shop Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <Image src={elem.thumbnail} alt='img' width={300} height={300} />
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default WeeksProduct