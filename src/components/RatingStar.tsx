import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
const RatingStar = ({ item, title }: any) => {
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<FaStar key={i} className="text-yellow-500" />); // Full star
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />); // Half star
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-500" />); // Empty star
            }
        }
        return stars;
    };

    return (
        <div className='flex items-center'>
            <div className='flex'>
                {renderStars(item.rating)}
            </div>
            <span className='ml-2'>{item.rating + " " + title}</span>
        </div>
    )
}

export default RatingStar