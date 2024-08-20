'use client'
import SingleProductPage from '@/components/SingleProductPage'
import fetchingData from '@/data/FetchingData'
import React, { useEffect, useState } from 'react'

const ProductPage = ({ params }: any) => {
    const [item, setItem] = useState<any>({})
    useEffect(() => {
        const getData = async () => {
            let data = await fetchingData(`https://dummyjson.com/products/${params.products}`)
            setItem(data)
        }
        getData()
    }, [])
    return (
        <main>
            <SingleProductPage item={item} />
        </main>
    )
}

export default ProductPage