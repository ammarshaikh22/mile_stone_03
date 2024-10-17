'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
const UserProfile = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
    })
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('/api/users/profile')
                setUser(res.data.user)
            } catch (error: any) {
                alert(error.response.data.message)
            }
        }
        getData()
    }, [])
    return (
        <section className='relative py-20'>
            <div className='max-w-[94%] mx-auto'>
                <div className='flex justify-start items-center gap-8'>
                    <div className='relative'>
                        <Image src='/author.png' alt='Image' width={200} height={200} className='rounded-full mb-4' />
                    </div>
                    <div>
                        <span className='text-lg'>Hello,</span>
                        <h3 className='text-3xl font-bold mt-1'>{user.name.toLocaleUpperCase()}</h3>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default UserProfile