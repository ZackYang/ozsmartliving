import { Card } from "flowbite-react";
import { getUrl } from "./OzSmartImage";
import { curtainFinishTypeList } from "@/lib/types/CurtainFinish";
import { PiCheckCircleFill } from "react-icons/pi";
import { useContext } from "react";
import lineItemContext from "./contexts/LineItemContext";

export default function CurtainFinishSelector() {
  const { lineItem, setLineItem } = useContext(lineItemContext)

  return (
    <div>
      <div className='flex flex-row'>
        <h5 className='text-2xl flex items-center font-bold tracking-tight p-4'>
          <span className='text-base sm:text-xl inline'>
            Curtain <span className='text-teal-500'>Finish</span> Style
          </span>
        </h5>
      </div >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-1">

        {
          curtainFinishTypeList.map((curtainFinishType) => {
            return (
              <Card
                imgSrc={getUrl({ src: curtainFinishType.publicId, alt: 'Curtain Fitting' })}
                className={`p-4 pb-2 border-2 hover:border-teal-600 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer relative ${lineItem.curtainFinishTypeKey === curtainFinishType.key ? 'border-teal-600 shadow-lg' : 'border-gray-300'}`}
                key={curtainFinishType.key}
                onClick={
                  () => setLineItem((prev) => {
                    return {
                      ...prev,
                      curtainFinishTypeKey: curtainFinishType.key
                    }
                  })
                }>
                <div className="flex flex-col">
                  <p className="text-center font-bold">{curtainFinishType.name}</p>
                </div>
                <div className={`${lineItem.curtainFinishTypeKey === curtainFinishType.key ? 'opacity-100' : 'opacity-0'} absolute drop-shadow-md inline-block bottom-3 right-3 text-5xl text-teal-500`} >
                  <PiCheckCircleFill />
                </div>
              </Card>
            )
          })
        }
      </div>
    </div >
  )
}