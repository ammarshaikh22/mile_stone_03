import Image from 'next/image';
import React, { useContext } from 'react';
import RatingStar from './RatingStar';
import { ThemeContext } from './ContextApi';
import { toast } from "sonner"

const SingleProductPage = ({ item }: any) => {
    const { cart, setCart } = useContext(ThemeContext);

    if (!item || !Array.isArray(item.images)) {
        return null;
    }

    const handleCard = () => {
        setCart([...cart, { ...item, quantity: 1 }]);
    };
    return (
        <section className='relative mt-32 mb-10'>
            <div className='max-w-[92%]  md:max-w-[96%] mx-auto'>
                <div className='flex gap-10 md:flex-row flex-col'>
                    <div className='md:w-[50%] bg-[#F4F4F5] flex items-center justify-center h-[650px] py-6'>
                        <Image src={item.images[0]} alt='img' width={500} height={500} className='w-full h-full object-contain' />
                    </div>
                    <div className='md:w-[50%]'>
                        <div className='max-w-[95%]'>
                            <h3 className='text-4xl mb-3 font-semibold'>{item.title}</h3>
                            <h4 className='text-2xl font-semibold mb-2'>$ {item.price}</h4>
                            <RatingStar item={item} title='Rating' />
                            <p className='text-gray-400 mt-6 mb-10'>Brand: <span className='text-green-600'>{item.brand ? item.brand : 'No Brand'}</span></p>
                            <p>{item.description}</p>
                        </div>
                        <div className='flex mt-6 mb-8 gap-2'>
                            <h6>Select Size : </h6>
                            <div className='flex gap-2 items-center justify-center'>
                                <button className='w-8 text-xs h-6 rounded-sm border border-black' type='button'>M</button>
                                <button className='w-8 text-xs h-6 rounded-sm border border-black' type='button'>L</button>
                                <button className='w-8 text-xs h-6 rounded-sm border border-black' type='button'>XL</button>
                                <button className='w-8 text-xs h-6 rounded-sm border border-black' type='button'>XXL</button>
                            </div>
                        </div>
                        <div className='flex gap-6'>
                            <button
                                className='px-2 w-[250px] h-[60px] font-bold bg-black text-white border border-black hover:bg-transparent hover:text-black rounded-sm'
                                onClick={() => {
                                    handleCard()
                                    toast("Product Add Successfully")
                                }
                                }
                            >
                                Add to Cart
                            </button>

                        </div>
                        <p className='mt-8'>{item.stock} Pieces Available</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProductPage;
