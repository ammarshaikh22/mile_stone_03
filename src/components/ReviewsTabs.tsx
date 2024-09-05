import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Review from './Review'
import SingleDetails from './SingleDetails'

const ReviewsTabs = ({ item }: any) => {
    return (
        <section className='relative my-6'>
            <div className='max-w-[96%] mx-auto'>
                <Tabs defaultValue="details" className="w-full">
                    <TabsList className='mb-6 ml-6'>
                        <TabsTrigger value="description">Description</TabsTrigger>
                        <TabsTrigger value="reviews">Reviews</TabsTrigger>
                        <TabsTrigger value="details">Details</TabsTrigger>
                    </TabsList>
                    <TabsContent value="description" className='max-w-[60%]'>{item.description}</TabsContent>
                    <TabsContent value="reviews"><Review item={item} /></TabsContent>
                    <TabsContent value="details"><SingleDetails item={item} /></TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default ReviewsTabs