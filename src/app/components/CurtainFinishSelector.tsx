import { Card } from "flowbite-react";
import { getUrl } from "./OzSmartImage";
import { curtainFinishTypeList } from "@/lib/types/CurtainFinish";
import { PiCheckCircleFill } from "react-icons/pi";
import { useContext } from "react";
import lineItemContext from "./contexts/LineItemContext";
import OzCard from "./sharedComponents/OzCard";

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
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 p-1">

        {
          curtainFinishTypeList.map((curtainFinishType) => {
            return (
              <OzCard
                key={curtainFinishType.key}
                imageUrl={curtainFinishType.publicId}
                title={curtainFinishType.name}
                currentKey={curtainFinishType.key}
                selectedKey={lineItem.curtainFinishTypeKey}
                onClick={
                  () => setLineItem((prev) => {
                    return {
                      ...prev,
                      curtainFinishTypeKey: curtainFinishType.key
                    }
                  })
                }
              />
            )
          })
        }
      </div>
    </div >
  )
}