import React, { useContext } from 'react'
import { ThemeContext } from './ContextApi';
import Button from './Button';

const PriceTable2 = () => {
    const { cart } = useContext(ThemeContext);
    let price = cart.reduce((acc: any, curr: any) => acc + curr.price, 0)
    console.log(price)
    return (
        <section className='relative my-20'>
            <div className='max-w-[36%] ml-8'>
                {
                    cart.length > 0 ?
                        <div>
                            <h4 className='mb-4 font-bold text-xl'>Cart Totals</h4>
                            <table className="w-full border-collapse text-center text-gray-500">
                                <thead className='border'>
                                    <tr>
                                        <th className="p-2">Discount</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className='border'>
                                    <td className='p-4'>Total</td>
                                    <td>$ {Math.round(price)}</td>
                                </tbody>
                            </table>
                            <div className='mt-8'>
                                <Button link='/check-out' name='Proceed to Checkout' className='text-sm font-bold px-10 rounded-sm bg-transparent border border-black hover:bg-black hover:text-white text-black h-[50px]' />
                            </div>
                        </div> :
                        null
                }
            </div>
        </section>
    )
}

export default PriceTable2