'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from './ui/input'
import { Button } from './ui/button'

const VerifyEmail = () => {
    const [token, setToken] = useState("")
    useEffect(() => {
        const token = window.location.search.split("=")[1]
        setToken(token)
    }, [token])
    const handleSubmit = async () => {
        const res = await axios.post('/api/users/verifyemail', { token })
        if (res.status === 200) {
            alert('Email verified successfully')
        }
    }
    return (
        <div className='flex flex-col justify-center items-center gap-4 h-screen bg-black'>
            <Card className='pb-6'>
                <CardHeader>
                    <CardTitle>Verify Email</CardTitle>
                    <CardTitle className='pt-2'>{token}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Input type="number" placeholder='Enter OTP' />
                </CardContent>
                <CardFooter>
                    <Button onClick={handleSubmit}>Submit</Button>
                </CardFooter>
                <p className="text-center"><Link href="/login" className='text-blue-500 underline'>Login</Link> to your account</p>
            </Card>
        </div>
    )
}

export default VerifyEmail