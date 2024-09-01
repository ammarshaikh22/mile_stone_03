'use client'
import ImagesSlide from '@/components/ImagesSlide'
import RelatedProduct from '@/components/RelatedProduct'
import ReviewsTabs from '@/components/ReviewsTabs'
import SingleProductPage from '@/components/SingleProductPage'
import StyleComp from '@/components/StyleComp'
import AddReviews from '@/components/AddReviews'
import fetchingData from '@/data/FetchingData'
import { apiData } from '@/types/interface'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@/components/ContextApi'

const ProductPage = ({ params}: any) => {
    const [item, setItem] = useState<any>({})
    useEffect(() => {
        const getData = async () => {
            let data: apiData = await fetchingData(`https://dummyjson.com/products/${params.products}`)
            setItem(data)
        }
        getData()
    }, [])
    return (
            <main>
                <StyleComp heading='Shop Details' />
                <SingleProductPage item={item} />
                <ImagesSlide item={item} />
                <ReviewsTabs item={item} />
                <AddReviews item={item} />
                <RelatedProduct item={item} />
            </main>
    )
}

export default ProductPage