import { Card } from "flowbite-react";
import { getUrl } from "./OzSmartImage";
import { curtainTrackTypeList } from "@/lib/types/CurtainTrack";
import { PiCheckCircleFill } from "react-icons/pi";
import { useContext } from "react";
import lineItemContext from "./contexts/LineItemContext";
import OzCard from "./sharedComponents/OzCard";

export default function CurtainTrackSelector() {
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
          curtainTrackTypeList.map((curtainTrackType) => {
            return (
              <OzCard
                key={curtainTrackType.key}
                imageUrl={curtainTrackType.publicId}
                imageWidth={150}
                imageHeight={150}
                title={curtainTrackType.name}
                currentKey={curtainTrackType.key}
                selectedKey={lineItem.curtainTrackTypeKey}
                onClick={
                  () => setLineItem((prev) => {
                    return {
                      ...prev,
                      curtainTrackTypeKey: curtainTrackType.key
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