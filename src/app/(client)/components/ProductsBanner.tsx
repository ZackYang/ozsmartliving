import './ProductsBanner.scss'
import doubleCurtain from '@/assets/double_curtains.webp';
import BestPriceWatermark from '@/assets/best_price_watermark.svg';
import PremiumWatermark from '@/assets/premium_watermark.svg';
import ShippingWatermark from '@/assets/shipping_watermark.png';
import WarrantyWatermark from '@/assets/warranty_watermark.png';
import Image from 'next/image';

import { League_Spartan, Khand } from 'next/font/google'
import { Button } from 'flowbite-react';

const LeagueSpartan = League_Spartan({ subsets: ['latin'] })
const khand = Khand({ subsets: ['latin'], weight: ["400"] })

export default function ProductsBanner() {
  return (
    <div className="products-banner grid grid-cols-1 gap-0 group">
      <div className='image-container overflow-visible h-[60dvh] md:h-[40dvh]] lg:h-[50dvh] xl:h-[50dvh] 2xl:h-[60dvh]'>
        <div
          className="sepia-[.35] group-hover:scale-105 duration-[2000ms] ease-in-out h-[30dvh] md:h-[40dvh]] lg:h-[50dvh] xl:h-[50dvh] 2xl:h-[60dvh] product-image bg-cover bg-center"
          style={{ backgroundImage: `url(${doubleCurtain.src})` }}
        >
        </div>
        <div className='absolute top-[10%] left-[13%] mb-5 text-black'>
          <pre className={`${LeagueSpartan.className} tracking-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl text-left text-3xl font-bold`}>
            Double curtains,
            <br />
            Luxury
            <br />
            & Exquisite.
          </pre>
          <div className='flex flex-row my-10'>
            <span className={`${khand.className} text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl text-left text-3xl font-bold`}>
              AT LUXULIVING
            </span>
          </div>
          <div className='flex flex-row my-10'>
            <Button href='/curtains' className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-left text-4xl font-bold' color='teal' size='lg'>Build your own now</Button>
          </div>
        </div>
        <div className='md:absolute top-0 hidden md:flex w-full bg-teal-600 md:bg-transparent md:w-1/2 md:scale-100 right-0 justify-end '>
          <Image className='inline-block -rotate-12 -m-1 md:m-2 lg:m-3 scale-75 xl:scale-100' src={PremiumWatermark.src} width={100} height={100} alt='Premium quality' />
          <Image className='inline-block -rotate-12 -m-1 md:m-2 lg:m-3 scale-75 xl:scale-100' src={BestPriceWatermark.src} width={100} height={100} alt='Best price' />
          <Image className='inline-block -rotate-12 -m-1 md:m-2 lg:m-3 scale-75 xl:scale-100' src={ShippingWatermark.src} width={100} height={100} alt='Shipping faster' />
          <Image className='inline-block -rotate-12 -m-1 md:m-2 lg:m-3 scale-75 xl:scale-100' src={WarrantyWatermark.src} width={100} height={100} alt='5 year warranty' />
        </div>
      </div>
    </div>
  )
}
