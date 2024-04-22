import { curtainFinishTypekey } from "./CurtainFinish";
import { curtainFittingTypekey } from "./CurtainFitting";
import { curtainHeadTypekey } from "./CurtainHead";
import { curtainStackTypekey } from "./CurtainStack";
import { curtainTrackTypekey } from "./CurtainTrack";
import { Product } from "./Product";
import { ProductType } from "./ProductType";
import { Variant } from "./Variant";

export type LineItem = {
  productType: ProductType | null,
  productTypeOne: ProductType | null,
  productOne: Product | null,
  variantOne: Variant | null,
  productTypeTwo: ProductType | null,
  productTwo: Product | null,
  variantTwo: Variant | null,
  width?: number,
  height?: number
  curtainStackTypeKey?: curtainStackTypekey | null,
  curtainFittingTypeKey?: curtainFittingTypekey | null,
  curtainHeadTypeKey?: curtainHeadTypekey | null,
  curtainFinishTypeKey?: curtainFinishTypekey | null,
  curtainTrackTypeKey?: curtainTrackTypekey | null,
  curtainHem?: 'lead' | '10mm' | '70mm' | '100mm',
  quantity?: number,
  price?: number,
  totalPrice?: number,
  gst?: number,
  roomName?: string | null,
}