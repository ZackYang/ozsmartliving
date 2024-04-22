import { FloatingLabel } from "flowbite-react";
import { useState } from "react";

export default function SizeSelector({
  maxWidth = 8000,
  maxHeight = 2700,
  onWidthChange,
  onHeightChange,
  onRoomNameChange,
  defaultName = '',
}: {
  maxWidth?: number;
  maxHeight?: number;
  onWidthChange?: (width: number) => void;
  onHeightChange?: (height: number) => void;
  onRoomNameChange?: (roomName: string) => void;
  defaultName?: string;
}) {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(1000);

  return (
    <div className="p-2">
      <FloatingLabel id="roomname" name='roomname' variant='standard' type="text" required label="Room Name" defaultValue={defaultName} onChange={
        (e: any) => {
          onRoomNameChange && onRoomNameChange(e.target.value || null);
        }
      } />
      <div className="flex flex-col">
        <FloatingLabel
          id="width" name='width' variant='standard' type="number" required label={`Width (mm) max ${maxWidth}mm`} onChange={
            (e: any) => {
              const value = parseInt(e.target.value);
              setWidth(value);
              onWidthChange && onWidthChange(value);
            }
          } />
        <FloatingLabel
          id="height" name='height' variant='standard' type="number" required label={`Drop (mm) max ${maxHeight}mm`} onChange={
            (e: any) => {
              const value = parseInt(e.target.value);

              setHeight(value);
              onHeightChange && onHeightChange(value);
            }
          } />
      </div>
    </div>
  );
}