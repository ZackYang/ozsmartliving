import { curtainFittingTypekey } from "./CurtainFitting";
import { curtainHeadTypekey } from "./CurtainHead";
import { curtainStackTypekey } from "./CurtainStack";
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
  height?: number,
  mountType?: 'ceiling' | 'wall',
  curtainStackTypeKey?: curtainStackTypekey | null,
  curtainFittingTypeKey?: curtainFittingTypekey | null,
  curtainHeadTypeKey?: curtainHeadTypekey | null,
  curtainFinish?: 'off-floor' | 'touch-floor' | 'puddle',
  curtainHem?: 'lead' | '10mm' | '70mm' | '100mm',
  trackType?: 'standard' | 'low-profile' | 'double-track' | 'motorised' | 'curved' | 'bay-window' | 'corner-window' | 'low-profile-double-track' | 'motorised-double-track',
  trackColor?: 'white' | 'black' | 'silver' | 'bronze' | 'anodised',
  quantity?: number,
  price?: number,
}