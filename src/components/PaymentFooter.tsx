import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const PaymentFooter = () => {
  return (
    <footer className='relative'>
      <div className='max-w-[92%] mx-auto md:before:absolute before:contents-[""]  before:bottom-14 before:mx-auto before:left-0 before:h-[1px] before:w-full before:bg-slate-200'>
        <div className='relative flex md:flex-row flex-col justify-between items-center gap-8 md:gap-0 py-10'>
          <div className='md:w-[20%] flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
              <div>
                <SupportAgentIcon className='text-6xl' />
              </div>
              <div>
                <span>8:30 AM - 10:30</span>
                <br />
                <span className='font-bold text-lg'>03162324240</span>
              </div>
            </div>
          </div>
          <div className='md:w-[30%] md:ml-4 md:before:absolute before:contents-[""] before:top-0 before:bottom-0 before:mx-auto before:left-[214px] before:h-full before:w-[1px] before:bg-slate-200 md:after:absolute after:contents-[""] after:top-0 after:bottom-0 after:mx-auto after:right-[580px] after:h-full after:w-[1px] after:bg-slate-200'>
            <h5>We Support</h5>
            <div className='flex gap-4 items-center mt-4'>
              <Image src='/card-1.png' alt='cards' width={50} height={30} />
              <Image src='/card-2.png' alt='cards' width={50} height={30} />
              <Image src='/card-3.png' alt='cards' width={50} height={30} />
              <Image src='/card-4.png' alt='cards' width={50} height={30} />
            </div>
          </div>
          <div className='md:w-[50%] flex md:flex-row flex-col gap-5 items-center'>
            <div>
              <span className='text-sm font-bold'>Download App on Mobile</span>
              <p className='text-xs'>Free home delivery on your first purchase</p>
            </div>
            <div className='flex gap-2'>
              <Image src='/app-store-1.png' alt='cards' width={150} height={30} />
              <Image src='/app-store-2.png' alt='cards' width={150} height={30} />
            </div>
          </div>
        </div>
        <div className='flex md:flex-row flex-col justify-between md:items-center py-4 gap-4 md:gap-0'>
          <div>
            <span className='text-base text-gray-500'>Copyright by AmmarShaikh. All Rights Reserved</span>
          </div>
          <div>
            <ul className='flex gap-6'>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className='flex gap-2 items-center'>
            <span>Follow Us:</span>
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
          </div>
        </div>
      </div>
    </footer>
  )
}

export default PaymentFooter