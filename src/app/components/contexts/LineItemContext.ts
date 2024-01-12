import { LineItem } from "@/lib/types/LineItem";
import { createContext, Dispatch, SetStateAction, useState } from "react";

function CreateLineItemContext() {
  const lineItemContext = createContext<{ lineItem: LineItem, setLineItem: Dispatch<SetStateAction<LineItem>> }>(
    {
      lineItem: {
        productType: null,
        productTypeOne: null,
        productOne: null,
        variantOne: null,
        productTypeTwo: null,
        productTwo: null,
        variantTwo: null
      },
      setLineItem: () => { }
    }
  );
  return lineItemContext
}

const lineItemContext = CreateLineItemContext()
export default lineItemContext