import { IoCloseSharp } from "react-icons/io5";

export default function CloseButton(
  props: any
) {
  return (
    <div>
      <div className="text-white width-auto bg-transparent cursor-pointer" {...props}>
        <IoCloseSharp />
      </div>
    </div>
  )
}