import { Card } from "flowbite-react";
import { getUrl } from "./OzSmartImage";
import { curtainHeadTypeList } from "@/lib/types/CurtainHead";
import { PiCheckCircleFill } from "react-icons/pi";
import { useContext } from "react";
import lineItemContext from "./contexts/LineItemContext";
import OzCard from "./sharedComponents/OzCard";

export default function CurtainHeadSelector() {
  const { lineItem, setLineItem } = useContext(lineItemContext)

  return (
    <div>
      <div className='flex flex-row'>
        <h5 className='text-2xl flex items-center font-bold tracking-tight p-4'>
          <span className='text-base sm:text-xl inline'>
            Choose curtain <span className='text-teal-500'>Style</span>
          </span>
        </h5>
      </div >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-1">

        {
          curtainHeadTypeList.map((curtainHeadType) => {
            return (
              <OzCard
                key={curtainHeadType.key}
                imageUrl={curtainHeadType.publicId}
                title={curtainHeadType.name}
                currentKey={curtainHeadType.key}
                selectedKey={lineItem.curtainHeadTypeKey}
                description={curtainHeadType.desc}
                onClick={
                  () => setLineItem((prev) => {
                    return {
                      ...prev,
                      curtainHeadTypeKey: curtainHeadType.key
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