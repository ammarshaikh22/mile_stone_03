import React from 'react'
import RatingStar from './RatingStar'
import Button from './Button'

const AddReviews = ({ item }: any) => {
    return (
        <section className='relative my-10'>
            <div className='max-w-[92%] md:max-w-[94%] mx-auto'>
                <div>
                    <h4 className='font-bold text-2xl'>Add a review</h4>
                    <p className='text-gray-400 mt-2 text-sm'>Your email address will not be published. Required fields are marked *</p>
                </div>
                <div className='mt-6'>
                    <RatingStar item={item} title='OverAll Rating' />
                </div>
                <div className='mt-6'>
                    <textarea placeholder='Your review' className='w-full border border-[#F6F6F6] resize-none h-[200px] p-4 bg-[#F6F6F6] placeholder:text-sm placeholder:text-gray-400'></textarea>
                </div>
                <div className='mt-8'>
                    <Button name='Submit' link='/' className='px-2 bg-black text-white border border-black rounded-sm text-sm font-bold w-[150px] h-[60px]' />
                </div>
            </div>
        </section>
    )
}

export default AddReviews