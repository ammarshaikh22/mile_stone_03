import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SingleItems from './SingleItems'
const ProductSlider = () => {
    return (
        <Tabs defaultValue="bestseller" className="w-full mx-auto">
            <TabsList className='mb-8'>
                <TabsTrigger value="bestseller">BestSeller</TabsTrigger>
                <TabsTrigger value="hotCollection">Hot Collection</TabsTrigger>
                <TabsTrigger value="trendy">Trendy</TabsTrigger>
                <TabsTrigger value="newArrival">New Arrival</TabsTrigger>
            </TabsList>
            <TabsContent value="bestseller"><SingleItems url="https://dummyjson.com/products/category/mens-shirts" /></TabsContent>
            <TabsContent value="hotCollection"><SingleItems url="https://dummyjson.com/products/category/womens-dresses" /></TabsContent>
            <TabsContent value="trendy"><SingleItems url="https://dummyjson.com/products/category/womens-bags" /></TabsContent>
            <TabsContent value="newArrival"><SingleItems url="https://dummyjson.com/products/category/mens-shoes" /></TabsContent>
        </Tabs>
    )
}

export default ProductSlider