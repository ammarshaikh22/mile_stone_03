import Image from 'next/image'
import React from 'react'

const OrderForm = () => {
    return (
        <section className='relative my-10'>
            <div className='max-w-[90%] mx-auto flex justify-center items-center'>
                <form className='shadow-2xl rounded-sm px-4 w-[700px]'>
                    <div className='max-w-[96%] mx-auto my-6'>
                        <div className='flex items-center justify-center'>
                            <div className='relative flex-grow before:absolute before:contents-[""] before:top-8 before:left-[1px] before:bg-[#707070] before:w-full before:h-[10px] before:z-[1px]'>
                                <div className='z-10 relative'>
                                    <div className='bg-[url("/home-white.72caeba8.svg")] bg-center mb-4 bg-black bg-no-repeat w-16 h-16 rounded-[50%]'></div>
                                    <h6 className='text-sm'>Address</h6>
                                </div>
                            </div>
                            <div className='relative flex-grow before:absolute before:contents-[""] before:top-8 before:left-[1px] before:bg-[#E8E9ED] before:w-full before:h-[10px] before:z-[1px]'>
                                <div className='z-10 relative'>
                                    <div className='bg-[url("/shoping-dark.69e36c6c.svg")] bg-center mb-4 bg-[#E8E9ED] bg-no-repeat w-16 h-16 rounded-[50%]'></div>
                                    <h6 className='text-sm'>Review</h6>
                                </div>
                            </div>
                            <div className='relative flex-grow before:absolute before:contents-[""] before:top-8 before:left-[1px] before:bg-[#E8E9ED] before:w-full before:h-[10px] before:z-[1px]'>
                                <div className='z-10 relative'>
                                    <div className='bg-[url("/payment-dark.3eebb608.svg")] bg-center mb-4 bg-[#E8E9ED] bg-no-repeat w-16 h-16 rounded-[50%]'></div>
                                    <h6 className='text-sm'>Payment</h6>
                                </div>
                            </div>
                            <div className='relative'>
                                <div className='z-10 relative'>
                                    <div className='bg-[url("/success-dark.3701da90.svg")] bg-center mb-4 bg-[#E8E9ED] bg-no-repeat w-16 h-16 rounded-[50%]'></div>
                                    <h6 className='text-sm'>Complete</h6>
                                </div>
                            </div>
                        </div>
                        <div className='mt-20'>
                            <h6 className='font-bold text-2xl'>Billing Details</h6>
                            <div className='flex md:flex-row flex-col gap-8 my-6'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="">Country</label>
                                    <select className='border w-full h-14 px-2'>
                                        <option value="pakistan">Pakistan</option>
                                        <option value="usa">USA</option>
                                        <option value="india">India</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="">First Name</label>
                                    <input type="text" className='border w-full h-14 px-2' placeholder='First Name' />
                                </div>
                            </div>
                            <div className='flex gap-8 my-6 md:flex-row flex-col'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" className='border w-full h-14 px-2' placeholder='Last Name' />
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="">Company</label>
                                    <input type="text" className='border w-full h-14 px-2' placeholder='Company' />
                                </div>
                            </div>
                            <div className='flex gap-8 my-6 md:flex-row flex-col'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="">Address</label>
                                    <input type="text" className='border w-full h-14 px-2' placeholder='Address' />
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="">Town / City</label>
                                    <input type="text" className='border w-full h-14 px-2' placeholder='Town / City' />
                                </div>
                            </div>
                            <div className='flex gap-8 my-6 md:flex-row flex-col'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="">State</label>
                                    <input type="text" className='border w-full h-14 px-2' placeholder='State' />
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="">Postcode / Zip</label>
                                    <input type="number" className='border w-full h-14 px-2' placeholder='Postcode / Zip' />
                                </div>
                            </div>
                            <div className='flex gap-8 my-6 md:flex-row flex-col'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="">Email Address</label>
                                    <input type="text" className='border w-full h-14 px-2' placeholder='Email Address' />
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="">Phone</label>
                                    <input type="number" className='border w-full h-14 px-2' placeholder='Phone' />
                                </div>
                            </div>
                            <div className='flex gap-8 my-6'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="">Order Notes</label>
                                    <textarea className='border w-full h-20 p-4 resize-none' placeholder='Note about your order'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='my-16 flex justify-end'>
                            <button className='bg-black px-4 h-8 rounded-sm text-white  '>Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default OrderForm