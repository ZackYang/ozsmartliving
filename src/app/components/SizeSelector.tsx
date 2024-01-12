import { FloatingLabel } from "flowbite-react";
import { useState } from "react";

export default function SizeSelector({
  maxWidth = 1000,
  maxHeight = 1000,
  defaultName = '',
}: {
  maxWidth?: number;
  maxHeight?: number;
  defaultName?: string;
}) {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(1000);
  const [roomName, setRoomName] = useState(defaultName);

  return (
    <div>
      <FloatingLabel id="roomname" name='roomname' variant='standard' type="text" required label="Room Name" defaultValue={roomName} onChange={
        (e: any) => {
          setRoomName(e.target.value);
        }
      } />
      <div className="flex flex-col">
        <FloatingLabel id="width" name='width' variant='standard' type="number" required label={`Width (mm) max ${maxWidth}mm`} />
        <FloatingLabel id="height" name='height' variant='standard' type="number" required label={`Drop (mm) max ${maxHeight}mm`} />
      </div>
    </div>
  );
}