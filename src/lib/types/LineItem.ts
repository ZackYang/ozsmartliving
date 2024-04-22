import { CurtainFinishType } from "./CurtainFinish";
import { CurtainFittingType } from "./CurtainFitting";
import { CurtainHeadType } from "./CurtainHead";
import { CurtainStackType } from "./CurtainStack";
import { CurtainTrackType } from "./CurtainTrack";
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
  curtainStackType?: CurtainStackType | null,
  curtainFittingType?: CurtainFittingType | null,
  curtainHeadType?: CurtainHeadType | null,
  curtainFinishType?: CurtainFinishType | null,
  curtainTrackType?: CurtainTrackType | null,
  curtainHem?: 'lead' | '10mm' | '70mm' | '100mm' | null,
  quantity?: number,
  price?: number,
  totalPrice?: number,
  gst?: number,
  roomName?: string | null,
}