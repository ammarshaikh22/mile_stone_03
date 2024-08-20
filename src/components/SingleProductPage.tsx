import React from 'react'

const SingleProductPage = ({ item }: any) => {
    return (
        <section className='relative'>
            <h1>{item.title}</h1>
        </section>
    )
}

export default SingleProductPage