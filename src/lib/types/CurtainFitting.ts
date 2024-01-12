export type CurtainFittingType = {
  name: string,
  publicId: string,
}

export enum curtainFittingTypekey {
  topMount = 'top-mount',
  faceMount = 'face-mount',
}

export const curtainFittingTypeMapping = {
  'top-mount': {
    key: curtainFittingTypekey.topMount,
    name: 'Ceilling/Top Mount',
    publicId: 'ceillingmount_utjw1i'
  },
  'face-mount': {
    key: curtainFittingTypekey.faceMount,
    name: 'Face Mount',
    publicId: 'wallmount_xbiul8'
  },
}

export const curtainFittingTypeList = [
  curtainFittingTypeMapping['top-mount'],
  curtainFittingTypeMapping['face-mount'],
]