import { Card } from 'flowbite-react';
import { PiCheckCircleFill, PiNumberCircleOneDuotone } from "react-icons/pi";

import sheerCurtain from '@/assets/sheer-curtain.jpg';
import doubleCurtain from '@/assets/double-curtain.jpg';
import blockoutCurtain from '@/assets/blockout-curtain.jpg';

export default function CurtainTypeSelector() {
  const cardClassName = "max-w-sm grayscale-[50%] hover:cursor-pointer hover:grayscale-0 duration-100 hover:border-teal-500 border-2 border-white group duration-200 ease-in-out"

  return (
    <>
      <div className='flex flex-row'>
        <h5 className='text-2xl flex items-center font-bold tracking-tight p-4'>
          <div>
            <PiNumberCircleOneDuotone class="inline text-5xl text-teal-500" />
          </div>
          <span className='inline'>
            Choose Curtain Type
          </span>
        </h5>
      </div >
      <div className='grid grid-cols-3 gap-3'>
        <Card
          className={cardClassName}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={sheerCurtain.src}
        >
          <h5 className="text-center text-2xl font-bold tracking-tight">
            Sheer Curtain
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Letting in natural daylight
            Stylise and sophisticate your room
            Provide a level of privacy
          </p>
          <PiCheckCircleFill class="absolute drop-shadow-md -bottom-3 -right-3 group-hover:opacity-100 opacity-0 duration-200 ease-in-out text-5xl text-teal-500" />
        </Card>
        <Card
          className={cardClassName}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={doubleCurtain.src}
        >
          <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Double Curtain
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <PiCheckCircleFill class="absolute drop-shadow-md -bottom-3 -right-3 group-hover:opacity-100 opacity-0 duration-200 ease-in-out text-5xl text-teal-500" />
        </Card>
        <Card
          className={cardClassName}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={blockoutCurtain.src}
        >
          <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Blockout Curtain
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <PiCheckCircleFill class="absolute drop-shadow-md -bottom-3 -right-3 group-hover:opacity-100 opacity-0 duration-200 ease-in-out text-5xl text-teal-500" />
        </Card>
      </div>
    </>
  );
}