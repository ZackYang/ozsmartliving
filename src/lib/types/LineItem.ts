import { ProductType } from "./ProductType";

export type LineItem = {
  productType?: ProductType,
  productOne?: JSON,
  variantOne?: JSON,
  productTwo?: JSON,
  variantTwo?: JSON,
  width?: number,
  height?: number,
  mountType?: 'ceiling' | 'wall',
  curtainStack?: 'single' | 'two' | 'multiple',
  curtainStyle?: 'Triple-pinch-pleat' | 'Double-pinch-pleat' | 'Pencil-pleat' | 'Eyelet' | 'S-fold',
  curtainFinish?: 'off-floor' | 'touch-floor' | 'puddle',
  curtainHem?: 'lead' | '10mm' | '70mm' | '100mm',
  trackType?: 'standard' | 'low-profile' | 'double-track' | 'motorised' | 'curved' | 'bay-window' | 'corner-window' | 'low-profile-double-track' | 'motorised-double-track',
  trackColor?: 'white' | 'black' | 'silver' | 'bronze' | 'anodised',
  quantity?: number,
  price?: number,
}