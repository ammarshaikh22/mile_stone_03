import Button from './Button'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Form = () => {
    return (
        <section className='relative my-16 md:my-32'>
            <div className='relative max-w-[94%] mx-auto'>
                <div className='flex md:flex-row flex-col justify-between items-center gap-10'>
                    <div className='md:w-[70%]'>
                        <h3 className='font-semibold text-4xl'>Get in Touch</h3>
                        <form>
                            <div className='flex gap-6 items-center my-8'>
                                <input type="text" placeholder='Name' className='px-4 w-[50%] h-14 border border-gray-300' />
                                <input type="number" placeholder='Number' className='px-4 w-[50%] h-14 border border-gray-300' />
                            </div>
                            <div className='flex gap-6 items-center my-8'>
                                <input type="email" placeholder='Email' className='px-4 w-full h-14 border border-gray-300' />
                            </div>
                            <div className='flex gap-6 items-center my-8'>
                                <textarea placeholder='Message' className='resize-none p-4 w-full h-40 placeholder:text-black border border-gray-300' />
                            </div>
                            <div className='flex gap-6 items-center my-8'>
                                <Button link='/contact' name='Submit Now' className='resize-none p-4 w-[200px] h-16 rounded-sm bg-black text-white hover:bg-transparent hover:text-black border border-black font-semibold' />
                            </div>
                        </form>
                    </div>
                    <div className='md:w-[30%] md:sticky bottom-0 top-0 border px-8 py-4 text-start border-gray-300'>
                        <h4 className='text-xl font-semibold'>Support Contact</h4>
                        <div className='flex mt-8 gap-4'>
                            <div>
                                <PhoneEnabledIcon />
                            </div>
                            <div>
                                <h6 className='font-semibold mb-2 text-lg' >Phone</h6>
                                <p className='text-gray-500 mb-2'>Mobile : <span className='font-semibold text-black'>+923162324240</span></p>
                                <p className='text-gray-500'>WhatsApp : <span className='font-semibold text-black'>+923162324240</span></p>
                            </div>
                        </div>
                        <div className='flex mt-8 gap-4'>
                            <div>
                                <EmailIcon />
                            </div>
                            <div>
                                <h6 className='font-semibold mb-2 text-lg' >Email</h6>
                                <p className='text-gray-500 mb-2 text-sm'>ammarshaikh50099@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex mt-8 gap-4'>
                            <div>
                                <LocationOnIcon />
                            </div>
                            <div>
                                <h6 className='font-semibold mb-2 text-lg' >Location</h6>
                                <p className='text-gray-500 mb-2 text-sm'>Flat A-10 Plot A1, Pyramid Plaza, Street, Block 15 F.B Yaseenabad, Karachi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form