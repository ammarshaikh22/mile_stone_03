'use client'
import React from 'react'
export const HeaderMenuOne = ({ names, fuc, className }: any) => {
    const handleClick = (ele: string) => {
        fuc(ele)
    }
    return (
        <div className={className}>
            {
                names.map((ele: any, ind: any) => {
                    return (
                        <div key={ind}>
                            <ul className='flex flex-col p-2 ml-1'>
                                <li className='cursor-pointer' onClick={(e) => handleClick(ele)}>{ele}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}


