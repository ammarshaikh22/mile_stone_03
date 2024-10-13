'use client'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { AnyAaaaRecord } from 'dns'
import Email from 'next-auth/providers/email'
import React, { useState } from 'react'

const ForgotPassword = () => {
    const [user, setUser] = useState({
        email: "",
        newPassword: "",
        confirmPassword: ""
    })
    const handlePassword = async () => {
        try {
            const res = await axios.post('/api/users/forgotpassword', user)
        } catch (error: any) {
            alert(error.message)
            console.log(error)
        }
    }
    return (
        <section className='relative'>
            <div className='max-[70%] mx-auto h-screen flex justify-center items-center'>
                <div className='flex flex-col items-center justify-center gap-6'>
                    <h4 className='mb-4'>Generate new Password</h4>
                    <Input type='email' placeholder='Enter your email' name='email' onChange={(e: any) => setUser({ ...user, email: e.target.value })} value={user.email} />
                    <Input type='password' placeholder='Enter new password' name='newPassword' onChange={(e: any) => setUser({ ...user, newPassword: e.target.value })} value={user.newPassword} />
                    <Input type='password' placeholder='Enter confirm password' name='confirmPassword' onChange={(e: any) => setUser({ ...user, confirmPassword: e.target.value })} value={user.confirmPassword} />
                    <button onClick={handlePassword}>Submit</button>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword