export type CurtainHeadType = {
  name: string,
  publicId: string,
}

export enum curtainHeadTypekey {
  DOUBLE_PLEAT = 'double-pleat',
  TRIPLE_PLEAT = 'triple-pleat',
  PENCIL_PLEAT = 'pencil-pleat',
  S_FOLD = 's-fold',
}

export const curtainHeadTypeMapping = {
  'double-pleat': {
    key: curtainHeadTypekey.DOUBLE_PLEAT,
    name: 'Double Pleat',
    publicId: 'DoublePinchPleat_Curtains_Style_hdzqe1'
  },
  'triple-pleat': {
    key: curtainHeadTypekey.TRIPLE_PLEAT,
    name: 'Triple Pleat',
    publicId: 'TriplePinchPleat_Curtains_Style_owk7ev'
  },
  'pencil-pleat': {
    key: curtainHeadTypekey.PENCIL_PLEAT,
    name: 'Pencil Pleat',
    publicId: 'Pencil_Curtains_Style_ffmo8x'
  },
  's-fold': {
    key: curtainHeadTypekey.S_FOLD,
    name: 'S Fold (Most popular)',
    publicId: 'SFold_Curtains_Style_ajtji1'
  }
}

export const curtainHeadTypeList = [
  curtainHeadTypeMapping['s-fold'],
  curtainHeadTypeMapping['double-pleat'],
  curtainHeadTypeMapping['triple-pleat'],
  curtainHeadTypeMapping['pencil-pleat'],
]