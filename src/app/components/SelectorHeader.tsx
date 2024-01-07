import {
  PiNumberCircleEightDuotone,
  PiNumberCircleFiveDuotone,
  PiNumberCircleFourDuotone,
  PiNumberCircleNineDuotone,
  PiNumberCircleOneDuotone,
  PiNumberCircleSevenDuotone,
  PiNumberCircleSixDuotone,
  PiNumberCircleThreeDuotone,
  PiNumberCircleTwoDuotone,
  PiNumberCircleZeroDuotone,
} from "react-icons/pi";

export default function SelectorHeader(
  {
    order,
    label
  }: {
    order: number
    label: string
  }
) {
  const icons = [
    PiNumberCircleZeroDuotone,
    PiNumberCircleOneDuotone,
    PiNumberCircleTwoDuotone,
    PiNumberCircleThreeDuotone,
    PiNumberCircleFourDuotone,
    PiNumberCircleFiveDuotone,
    PiNumberCircleSixDuotone,
    PiNumberCircleSevenDuotone,
    PiNumberCircleEightDuotone,
    PiNumberCircleNineDuotone,
  ]
  return (
    <div className='flex flex-row'>
      <h5 className='text-2xl flex items-center font-bold tracking-tight p-4'>
        <div className="inline text-2xl sm:text-5xl text-teal-500">
          {icons[order]()}
        </div>
        <span className='text-xl sm:text-2xl inline'>
          {label}
        </span>
      </h5>
    </div >
  )
}