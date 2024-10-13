'use client'
import PriceTable2 from '@/components/PriceTable2'
import StyleComp from '@/components/StyleComp'
import Table from '@/components/Table'
import React from 'react'

const CartPage = () => {
  return (
    <main >
      <StyleComp heading='My Cart' />
      <Table />
      <PriceTable2 />
    </main>
  )
}

export default CartPage