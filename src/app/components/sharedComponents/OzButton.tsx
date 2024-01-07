import { Button } from "flowbite-react";
import { theme } from "./OzButtonTheme";


export default function OzButton(
  props?: any
) {
  return (
    <Button
      theme={theme}
      size="xs"
      color="white"
      pill
      className="text-sm font-bold cursor-pointer"
      {...props}
    >
      {
        props.children
      }
    </Button>
  )
}