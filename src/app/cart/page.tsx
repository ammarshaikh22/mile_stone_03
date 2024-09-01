'use client'
import { ThemeProvider } from '@/components/ContextApi'
import StyleComp from '@/components/StyleComp'
import Table from '@/components/Table'
import React from 'react'

const CartPage = () => {
  return (
    <main >
      <StyleComp heading='My Cart' />
      <Table />
    </main>
  )
}

export default CartPage