import { Card } from 'flowbite-react';
import { PiNumberCircleTwoDuotone } from "react-icons/pi";
import { PiCheckCircleFill } from "react-icons/pi";

import exaltation from '@/assets/exaltation.png';
import euclid from '@/assets/euclid.png';
import milkTea from '@/assets/milk-tea.png';

export default function FabricSelector() {
  const cardClassName = "max-w-sm grayscale-200 grayscale-[50%] hover:cursor-pointer hover:grayscale-0 duration-100 hover:border-teal-500 border-2 border-white group duration-200 ease-in-out"

  return (
    <>
      <div className='flex flex-row'>
        <h5 className='text-2xl flex items-center font-bold tracking-tight p-4'>
          <div>
            <PiNumberCircleTwoDuotone class="inline text-5xl text-teal-500" />
          </div>
          <span className='inline'>
            Select Curtain Fabric
          </span>
        </h5>
      </div >
      <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3'>
        <Card
          className={cardClassName}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={exaltation.src}
          theme={{ root: { children: 'flex h-full flex-col justify-center gap-4 p-2' } }}
        >
          <p className="font-bold text-center text-gray-700 dark:text-gray-400">
            Exaltation
          </p>
          <PiCheckCircleFill class="absolute drop-shadow-md -top-3 -right-3 group-hover:opacity-100 opacity-0 duration-200 ease-in-out text-5xl text-teal-500" />
        </Card>
        <Card
          className={cardClassName}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={euclid.src}
          theme={{ root: { children: 'flex h-full flex-col justify-center gap-4 p-2' } }}
        >
          <p className="font-bold text-center text-gray-700 dark:text-gray-400">
            Euclid
          </p>
          <PiCheckCircleFill class="absolute drop-shadow-md -top-3 -right-3 group-hover:opacity-100 opacity-0 duration-200 ease-in-out text-5xl text-teal-500" />
        </Card>
        <Card
          className={cardClassName}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={milkTea.src}
          theme={{ root: { children: 'flex h-full flex-col justify-center gap-4 p-2' } }}
        >
          <p className="font-bold text-center text-gray-700 dark:text-gray-400">
            Milk-Tea
          </p>
          <PiCheckCircleFill class="absolute drop-shadow-md -top-3 -right-3 group-hover:opacity-100 opacity-0 duration-200 ease-in-out text-5xl text-teal-500" />
        </Card>
        <Card
          className={cardClassName}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={exaltation.src}
          theme={{ root: { children: 'flex h-full flex-col justify-center gap-4 p-2' } }}
        >
          <p className="font-bold text-center text-gray-700 dark:text-gray-400">
            Exaltation
          </p>
          <PiCheckCircleFill class="absolute drop-shadow-md -top-3 -right-3 group-hover:opacity-100 opacity-0 duration-200 ease-in-out text-5xl text-teal-500" />
        </Card>
        <Card
          className={cardClassName}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={euclid.src}
          theme={{ root: { children: 'flex h-full flex-col justify-center gap-4 p-2' } }}
        >
          <p className="font-bold text-center text-gray-700 dark:text-gray-400">
            Euclid
          </p>
          <PiCheckCircleFill class="absolute drop-shadow-md -top-3 -right-3 group-hover:opacity-100 opacity-0 duration-200 ease-in-out text-5xl text-teal-500" />
        </Card>
        <Card
          className={cardClassName}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={milkTea.src}
          theme={{ root: { children: 'flex h-full flex-col justify-center gap-4 p-2' } }}
        >
          <p className="font-bold text-center text-gray-700 dark:text-gray-400">
            Milk-Tea
          </p>
          <PiCheckCircleFill class="absolute drop-shadow-md -top-3 -right-3 group-hover:opacity-100 opacity-0 duration-200 ease-in-out text-5xl text-teal-500" />
        </Card>
        <Card
          className={cardClassName}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={exaltation.src}
          theme={{ root: { children: 'flex h-full flex-col justify-center gap-4 p-2' } }}
        >
          <p className="font-bold text-center text-gray-700 dark:text-gray-400">
            Exaltation
          </p>
          <PiCheckCircleFill class="absolute drop-shadow-md -top-3 -right-3 group-hover:opacity-100 opacity-0 duration-200 ease-in-out text-5xl text-teal-500" />
        </Card>
        <Card
          className={cardClassName}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={euclid.src}
          theme={{ root: { children: 'flex h-full flex-col justify-center gap-4 p-2' } }}
        >
          <p className="font-bold text-center text-gray-700 dark:text-gray-400">
            Euclid
          </p>
          <PiCheckCircleFill class="absolute drop-shadow-md -top-3 -right-3 group-hover:opacity-100 opacity-0 duration-200 ease-in-out text-5xl text-teal-500" />
        </Card>
        <Card
          className={cardClassName}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={milkTea.src}
          theme={{ root: { children: 'flex h-full flex-col justify-center gap-4 p-2' } }}
        >
          <p className="font-bold text-center text-gray-700 dark:text-gray-400">
            Milk-Tea
          </p>
          <PiCheckCircleFill class="absolute drop-shadow-md -top-3 -right-3 group-hover:opacity-100 opacity-0 duration-200 ease-in-out text-5xl text-teal-500" />
        </Card>
        <Card
          className={cardClassName}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={exaltation.src}
          theme={{ root: { children: 'flex h-full flex-col justify-center gap-4 p-2' } }}
        >
          <p className="font-bold text-center text-gray-700 dark:text-gray-400">
            Exaltation
          </p>
          <PiCheckCircleFill class="absolute drop-shadow-md -top-3 -right-3 group-hover:opacity-100 opacity-0 duration-200 ease-in-out text-5xl text-teal-500" />
        </Card>
        <Card
          className={cardClassName}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={euclid.src}
          theme={{ root: { children: 'flex h-full flex-col justify-center gap-4 p-2' } }}
        >
          <p className="font-bold text-center text-gray-700 dark:text-gray-400">
            Euclid
          </p>
          <PiCheckCircleFill class="absolute drop-shadow-md -top-3 -right-3 group-hover:opacity-100 opacity-0 duration-200 ease-in-out text-5xl text-teal-500" />
        </Card>
        <Card
          className={cardClassName}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={milkTea.src}
          theme={{ root: { children: 'flex h-full flex-col justify-center gap-4 p-2' } }}
        >
          <p className="font-bold text-center text-gray-700 dark:text-gray-400">
            Milk-Tea
          </p>
          <PiCheckCircleFill class="absolute drop-shadow-md -top-3 -right-3 group-hover:opacity-100 opacity-0 duration-200 ease-in-out text-5xl text-teal-500" />
        </Card>
      </div>
    </>
  );
}