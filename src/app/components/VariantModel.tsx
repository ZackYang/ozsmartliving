import { Variant } from "@/lib/types/Variant"
import './VariantModel.scss'
import CloseButton from "./sharedComponents/CloseButton"
import OzSmartImage from "./OzSmartImage"
import Carousel from "react-multi-carousel"
import { Product } from "@/lib/types/Product"
import { Progress } from "flowbite-react"
import { useState } from "react"
import OrderSampleButton from "./sharedComponents/OzButton"
import { progressTheme } from "./ProgressTheme"

export default function VariantModel(
  {
    variant,
    product,
    openModal,
    onClose,
  }: {
    product: Product,
    variant: Variant,
    openModal: boolean,
    onClose: () => void,
  }
) {
  const [closing, setClosing] = useState(false)

  const closeModel = () => {
    setClosing(true)
    setTimeout(() => {
      onClose()
      setClosing(false)
    }, 300)
  }

  return (
    openModal &&
    <div className={`fixed cursor-default top-0 md:grid md:content-center left-0 w-full z-50 flex justify-center ${closing ? 'VariantModelClosing' : 'VariantModel'} h-dvh`}>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-75 z-0" onClick={closeModel}></div>
      <div className="container bg-teal-600 rounded h-max max-w-3xl max-h-dvh overflow-y-auto flex flex-col z-30">
        <div className="flex flex-row text-4xl m-2 z-40 gap-2 mt-4">
          <div className="basis-1/5 flex justify-start">
            <CloseButton onClick={closeModel} />
          </div>
          <div className="basis-4/5 flex justify-end">
            <OrderSampleButton>
              Order a free sample
            </OrderSampleButton>
          </div>
        </div>
        <div className="mt-2">
          {
            variant?.images && (
              <Carousel
                responsive={{
                  superLargeDesktop: {
                    breakpoint: { max: 4000, min: 3000 },
                    items: 1,
                  },
                  desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 1,

                  },
                  tablet: {
                    breakpoint: { max: 1024, min: 640 },
                    items: 1,
                  },
                  mobile: {
                    breakpoint: { max: 640, min: 0 },
                    items: 1,
                  },
                }}
                showDots={variant?.images.length > 1 ? true : false}
                ssr={true}
                arrows={true}
                autoPlay={false}>
                {
                  variant.images.map((image) => {
                    return (
                      <div
                        key={image.id}
                        className="flex justify-center"
                      >
                        <OzSmartImage
                          src={image}
                          alt={variant.name}
                          width={800}
                          height={800}
                          crop="fill"
                          className="w-full max-w-2xl rounded border-0"
                        />
                      </div>
                    )
                  })
                }
              </Carousel>
            )
          }
        </div>
        <div className="justify-center text-white rounded p-3">
          <div className="flex flex-col justify-center gap-2">
            <div className="text-2xl font-normal ">
              <span className="text-3xl font-bold">{variant.name}</span>/{product.name}
            </div>
            <hr className="border-white" />
            <div className="text-sm">
              {variant.composition}
            </div>
            <hr className="border-white" />
            <div className="text-sm">
              <Progress
                theme={progressTheme}
                progress={variant.shadingRate}
                size="sm"
                color="white"
                progressLabelPosition="outside"
                textLabel="Shading Rate"
                textLabelPosition="outside"
                labelProgress
                labelText />
            </div>
            <div className="text-sm">
              <Progress
                progress={variant.energyEfficiency}
                size="sm"
                theme={progressTheme}
                color="white"
                progressLabelPosition="outside"
                textLabel="Energy Efficiency"
                textLabelPosition="outside"
                labelProgress
                labelText />
            </div>
            <div className="text-sm text-white">
              <Progress progress={variant.daytimePrivacy}
                size="sm"
                theme={progressTheme}
                color="white"
                progressLabelPosition="outside"
                textLabel="Daytime Privacy"
                textLabelPosition="outside"
                labelProgress
                labelText />
            </div>
            <div className="text-sm text-white">
              <Progress progress={variant.nightimePrivacy}
                size="sm"
                theme={progressTheme}
                color="white"
                progressLabelPosition="outside"
                textLabel="Nightime Privacy"
                textLabelPosition="outside"
                labelProgress
                labelText />
            </div>
            <div className="text-sm text-white">
              From
            </div>
            <div className="text-sm text-white">
              {variant.careInstructions}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}