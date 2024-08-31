import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HeaderMenuOne } from './HeaderMenu'
import { menuData } from '@/data/data'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Filtration from './Filtration'
import SegmentIcon from '@mui/icons-material/Segment';
import ClearIcon from '@mui/icons-material/Clear';
const StaticData = () => {
    const [name, setName] = useState("Default")
    const [menu, setMenu] = useState(false)
    const [filterData, setFilterData] = useState([])
    const [count, setCount] = useState(0)
    const [mobileMenu, setMobileMenu] = useState(false)
    const takeNames = (name: any) => {
        setName(name);
    };
    const handleMenuTo = () => {
        setMenu(!menu);
    };
    return (
        <section className='relative my-28' onClick={() => {
            if (menu) {
                setMenu(false);
            }
        }}>
            <div className='max-w-[92%] mx-auto'>
                <div className='flex gap-6'>
                    <div className='md:w-[80%]'>
                        <div className='flex justify-between md:flex-row flex-col gap-4 md:gap-0 md:items-center md:w-[98%] mb-10'>
                            <h5>Showing {count} of 194 products</h5>
                            <div className='flex items-center gap-4'>
                                <span>Sort By:</span>
                                <div className='relative border border-gray-300 w-36 h-12 rounded-md'>
                                    <p className='text-lg ml-1 p-2'>{name}
                                        <span className='ml-2'>
                                            {menu ? (
                                                <ExpandLessIcon
                                                    onClick={handleMenuTo}
                                                    className="cursor-pointer"
                                                />
                                            ) : (
                                                <ExpandMoreIcon
                                                    onClick={handleMenuTo}
                                                    className="cursor-pointer"
                                                />
                                            )}
                                        </span>
                                    </p>
                                    {
                                        menu ? <HeaderMenuOne
                                            names={menuData}
                                            fuc={takeNames}
                                            className={`absolute top-12 left-0 right-0 mx-auto w-full h-auto border rounded-md bg-white z-20`} />
                                            :
                                            null
                                    }
                                </div>
                                <div className='md:hidden block ml-4'>
                                    <SegmentIcon className='text-4xl' onClick={() => setMobileMenu(!mobileMenu)} />
                                </div>
                                {
                                    mobileMenu ?
                                        <div className={`p-6 overflow-scroll z-50 fixed top-0 right-0 h-full w-[80%] bg-gray-100 border transform transition-transform duration-300 ${mobileMenu ? "translate-x-0" : "translate-x-full"
                                            }`}>
                                            <div className='mt-10'>
                                                <div className='max-w-[100%] mx-auto'>
                                                    <div className='flex justify-between items-center' onClick={() => setMobileMenu(!mobileMenu)}>
                                                        <span className='text-2xl font-bold'>Filter Items</span>
                                                        <div className='w-[100px] h-[40px] items-center justify-center flex gap-2 bg-black text-white text-xl'>
                                                            <span>close</span>
                                                            <ClearIcon />
                                                        </div>
                                                    </div>
                                                    <div className='mt-12'>
                                                        <Filtration setFilterData={setFilterData} setCount={setCount} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : null
                                }
                            </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  justify-between gap-10 items-center'>
                            {
                                filterData.map((elem: any) => {
                                    return (
                                        <div className='flex flex-col justify-center' key={elem.id}>
                                            <Link href={`/shop/${elem.id.toString()}`} >
                                                <div className='bg-[#F4F4F4] md:w-[255px] w-full h-[330px] flex justify-center items-center'>
                                                    <Image src={elem.thumbnail} alt='img' width={500} height={500} />
                                                </div>
                                            </Link>
                                            <div className='mt-4 text-start'>
                                                <h4 className='mb-2 font-semibold'>{elem.title}</h4>
                                                <span className='text-base font-bold'>{elem.price} $</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='md:w-[20%] md:block hidden'>
                        <Filtration className="sticky bottom-0 top-0 left-0 right-0" setFilterData={setFilterData} setCount={setCount} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StaticData