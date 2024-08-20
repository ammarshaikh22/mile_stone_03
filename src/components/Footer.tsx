import { footerData } from '@/data/data'
import Link from 'next/link'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Footer = () => {
    return (
        <footer className='relative bg-[#F6F6F6] py-16 mt-10'>
            <div className='max-w-[92%] mx-auto'>
                <div className='flex justify-between items-start gap-10 md:gap-0 md:flex-row flex-col'>
                    {
                        footerData.map((elem) => {
                            return (
                                <div key={elem.id} className='md:w-[25%] flex flex-col justify-start items-start gap-3'>
                                    <h4 className='text-xl mb-3 font-semibold'>{elem.heading}</h4>
                                    {
                                        elem.data.map((data, ind) => {
                                            return (
                                                <span key={ind} className='text-gray-500 text-base'><Link href={data.url}>{data.title}</Link></span>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    <div className='md:w-[25%] flex flex-col justify-start items-start gap-4 md:gap-3'>
                        <h4 className='text-xl mb-3 font-semibold'>NewsLetter</h4>
                        <p className='text-gray-500 text-base'>Enter your email below to be the first to know about new collections and product launches.</p>
                        <div className='flex justify-center items-center flex-col gap-4'>
                            <input type="email" placeholder='Enter your Email' className='px-6 py-4 w-[270px]' />
                            <button className='bg-black text-white w-[270px] px-6 py-[15px] hover:bg-transparent border hover:text-black border-black '>Subscribe <span> <ArrowRightAltIcon /> </span></button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer