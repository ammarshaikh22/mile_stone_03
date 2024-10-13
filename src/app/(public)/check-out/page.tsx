'use client'
import OrderForm from '@/components/OrderForm'
import StyleComp from '@/components/StyleComp'
import React from 'react'

const CheckOutPage = () => {
    return (
        <main>
            <StyleComp heading='Checkout' />
            <OrderForm/>
        </main>
    )
}

export default CheckOutPage