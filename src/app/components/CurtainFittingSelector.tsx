import { Card } from "flowbite-react";
import { getUrl } from "./OzSmartImage";
import { curtainFittingTypeList } from "@/lib/types/CurtainFitting";
import { PiCheckCircleFill } from "react-icons/pi";
import { useContext } from "react";
import lineItemContext from "./contexts/LineItemContext";

export default function CurtainFittingSelector() {
  const { lineItem, setLineItem } = useContext(lineItemContext)

  return (
    <div>
      <div className='flex flex-row'>
        <h5 className='text-2xl flex items-center font-bold tracking-tight p-4'>
          <span className='text-base sm:text-xl inline'>
            Curtain <span className='text-teal-500'>Fitting</span> Style
          </span>
        </h5>
      </div >
      <div className="w-full flex flex-row gap-4 p-2 max-w-[20vw] justify-start">
        {
          curtainFittingTypeList.map((curtainFittingType) => {
            return (
              <div key={curtainFittingType.key} className="basis-28">
                <Card
                  imgSrc={getUrl({ src: curtainFittingType.publicId, alt: 'Curtain Fitting' })}
                  className={`p-4 pb-2 border-2 hover:border-teal-600 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer relative ${lineItem.curtainFittingTypeKey === curtainFittingType.key ? 'border-teal-600 shadow-lg' : 'border-gray-300'}`}
                  key={curtainFittingType.key}
                  onClick={
                    () => setLineItem((prev) => {
                      return {
                        ...prev,
                        curtainFittingTypeKey: curtainFittingType.key
                      }
                    })
                  }>
                  <div className="flex flex-col">
                    <p className="text-center font-bold">{curtainFittingType.name}</p>
                  </div>
                  <div className={`${lineItem.curtainFittingTypeKey === curtainFittingType.key ? 'opacity-100' : 'opacity-0'} absolute drop-shadow-md inline-block bottom-3 right-3 text-5xl text-teal-500`} >
                    <PiCheckCircleFill />
                  </div>
                </Card>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}