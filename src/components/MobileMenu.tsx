'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
import SearchInputData from './SearchInputData';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const MobileMenu = ({ setMobileMenu }: any) => {
    const [user, setUser] = useState(false)
    const route = useRouter()
    useEffect(() => {
        const getUserData = async () => {
            const res = await axios.get('/api/users/profile')
            setUser(res.data.user?.isLogin)
        }
        getUserData()
    }, [])
    const handleLogout = async (e: any) => {
        e.preventDefault()
        const res = await axios.post('/api/users/logout')
        alert('Logout successfully')
        setUser(false)
        route.push('/login')
    }
    return (
        <div className='flex flex-col justify-start items-start gap-8 '>
            <div>
                <Image src="/logo.png" alt="logo" height={130} width={130} />
            </div>
            <div className="relative">
                <SearchInputData setMobileMenu={setMobileMenu} />
                <div className="absolute top-3 right-4">
                    <SearchIcon className="text-2xl" />
                </div>
            </div>
            <div className="relative w-full" >
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger><Link href="/" onClick={() => setMobileMenu(false)}>Home</Link></AccordionTrigger>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Shop</AccordionTrigger>
                        <AccordionContent>
                            <ul className='flex flex-col gap-4 ml-8'>
                                <Link href="/shop" onClick={() => setMobileMenu(false)}>Shop</Link>
                                <Link href="/shop/86" onClick={() => setMobileMenu(false)}>Shop Detail</Link>
                                <Link href="/cart" onClick={() => setMobileMenu(false)}>Cart</Link>
                                <Link href="/check-out" onClick={() => setMobileMenu(false)}>CheckOut</Link>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger><Link href="/about" onClick={() => setMobileMenu(false)}>About</Link></AccordionTrigger>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger><Link href="/contact" onClick={() => setMobileMenu(false)}>Contact</Link></AccordionTrigger>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger><Link href="/profile" onClick={() => setMobileMenu(false)}>Profile</Link></AccordionTrigger>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="flex items-center gap-5">
                <div className="relative">
                    <WorkOutlineIcon />
                    <span className='absolute contents-[""] -top-1 -right-2 rounded-[50%] bg-purple-700 w-[20px] h-[20px] mx-auto text-center text-sm text-white'>
                        0
                    </span>
                </div>
                <div className="relative">
                    <FavoriteBorderIcon />
                    <span className='absolute contents-[""] -top-1 -right-2 rounded-[50%] bg-black text-white w-[20px] h-[20px] mx-auto text-center text-sm'>
                        0
                    </span>
                </div>
                <div className="relative">
                    <SyncAltIcon />
                    <span className='absolute contents-[""] -top-1 -right-2 rounded-[50%] bg-black w-[20px] h-[20px] mx-auto text-center text-white text-sm'>
                        0
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="relative">
                    <Link href="/"><FacebookIcon /></Link>
                </div>
                <div className="relative">
                    <Link href="/"><LinkedInIcon /></Link>
                </div>
                <div className="relative">
                    <Link href="/"><InstagramIcon /></Link>
                </div>
                <div className="relative">
                    <Link href="/"><TwitterIcon /></Link>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <PersonOutlineIcon />
                <p className='after:absolute after:contents-[""] after:top-0 after:left-0 after:right-28 after:mx-auto after:w-[1px] after:h-5 after:bg-slate-200'>
                    {
                        user ? <span className="cursor-pointer" onClick={handleLogout}>Logout</span> : <span className="cursor-pointer"><Link href='/login'>Login</Link></span>
                    }
                </p>
            </div>
        </div>
    )
}

export default MobileMenu