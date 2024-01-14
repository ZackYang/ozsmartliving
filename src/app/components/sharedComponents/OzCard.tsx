import { Card } from "flowbite-react"
import OzSmartImage, { getUrl } from "../OzSmartImage"
import { PiCheckCircleFill } from "react-icons/pi"
import { curtainTrackTypekey } from "@/lib/types/CurtainTrack"
import Image from "next/image"
import { root } from "postcss"
import { Children } from "react"

export default function OzCard(
  {
    imageUrl,
    title,
    currentKey,
    selectedKey,
    description,
    imageWidth,
    imageHeight,
    onClick
  }: {
    imageUrl: string
    title: string
    currentKey: string
    selectedKey?: string | null | undefined
    description?: string
    imageWidth?: number
    imageHeight?: number
    onClick?: () => void
  }

) {
  const isSelected = currentKey === selectedKey

  return (
    <Card
      className={`md:p-2 pb-2 border-2 hover:border-teal-600 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer relative ${isSelected ? 'border-teal-600 shadow-lg' : 'border-gray-300'}`}
      key={title}
      theme={{
        root: {
          children: "flex h-full flex-col justify-center gap-4 p-2"
        }
      }
      }
      onClick={onClick}>
      <div className="flex justify-center">
        <OzSmartImage src={imageUrl} alt={title} width={imageWidth || 150} height={imageHeight || 150} />
      </div>
      <div className="flex flex-col">
        <p className="text-center font-bold text-sm">{title}</p>
        <p className={`text-center ${description !== undefined ? 'h-6' : ''} text-xs text-gray-600`}>{description}</p>
      </div>
      <div className={`${isSelected ? 'opacity-100' : 'opacity-0'} absolute drop-shadow-md inline-block bottom-3 right-3 text-5xl text-teal-500`} >
        <PiCheckCircleFill />
      </div>
    </Card>
  )
}