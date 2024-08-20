import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const SubscribePage = () => {
    return (
        <section className='relative py-10'>
            <div className='max-w-[92%] mx-auto bg-[#F6F6F6]'>
                <div className='border text-center flex flex-col justify-center items-center bg-[url("/subscribe.png")] bg-cover bg-no-repeat w-full py-10 px-4 md:p-20'>
                    <h3 className='text-3xl md:text-4xl mb-8'>Subscribe Newsletter</h3>
                    <p className='md:max-w-[40%] mx-auto text-gray-500'>Enter your email below to be the first to know about new collections and product launches.</p>
                    <div className='flex justify-center items-center mt-12 md:flex-row flex-col md:gap-0 gap-4'>
                        <input type="email" placeholder='Enter your Email' className='px-6 py-4 w-[300px] md:w-[480px]' />
                        <button className='bg-black text-white w-[300px] md:w-[160px] px-6 py-[15px] hover:bg-transparent border hover:text-black border-black '>Subscribe <span> <ArrowRightAltIcon/> </span></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribePage