import { Card } from "flowbite-react";
import { getUrl } from "./OzSmartImage";
import { curtainStackTypeList } from "@/lib/types/CurtainStack";
import { PiCheckCircleFill } from "react-icons/pi";
import { useContext } from "react";
import lineItemContext from "./contexts/LineItemContext";

export default function CurtainStackSelector() {
  const { lineItem, setLineItem } = useContext(lineItemContext)

  return (
    <div>
      <div className='flex flex-row'>
        <h5 className='text-2xl flex items-center font-bold tracking-tight p-4'>
          <span className='text-base sm:text-xl inline'>
            Choose curtain <span className='text-teal-500'>Stack</span>
          </span>
        </h5>
      </div >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-1">

        {
          curtainStackTypeList.map((curtainStackType) => {
            return (
              <Card
                imgSrc={getUrl({ src: curtainStackType.publicId, alt: 'Curtain Fitting' })}
                className={`p-4 pb-2 border-2 hover:border-teal-600 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer relative ${lineItem.curtainStackTypeKey === curtainStackType.key ? 'border-teal-600 shadow-lg' : 'border-gray-300'}`}
                key={curtainStackType.key}
                onClick={
                  () => setLineItem((prev) => {
                    return {
                      ...prev,
                      curtainStackTypeKey: curtainStackType.key
                    }
                  })
                }>
                <div className="flex flex-col">
                  <p className="text-center font-bold">{curtainStackType.name}</p>
                </div>
                <div className={`${lineItem.curtainStackTypeKey === curtainStackType.key ? 'opacity-100' : 'opacity-0'} absolute drop-shadow-md inline-block bottom-3 right-3 text-5xl text-teal-500`} >
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