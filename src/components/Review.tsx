import Image from 'next/image';
import React from 'react'
import RatingStar from './RatingStar';

const Review = ({ item }: any) => {
    if (!item || !Array.isArray(item.reviews)) {
        console.error('Item or images array is undefined or not an array');
        return null;
    }
    return (
        <div className='flex flex-col gap-10'>
            {
                item.reviews.map((review: any, index: number) => {
                    return (
                        <div key={index} className='flex gap-6'>
                            <div>
                                <Image src='/course-reviews-1.png' alt='img' width={50} height={50} />
                            </div>
                            <div>
                                <h6 className='font-bold text-black mb-2'>{review.reviewerName}</h6>
                                <RatingStar item={review} title='Rating' />
                                <p className='mt-2 text-sm '>{review.comment}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Review