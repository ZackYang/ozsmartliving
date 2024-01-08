const sheerCurtain = 'https://res.cloudinary.com/delwweo7a/image/upload/v1703831224/sheer-curtain_nksb1p.jpg'
const doubleCurtain = 'https://res.cloudinary.com/delwweo7a/image/upload/v1703831224/double-curtain_r2fus6.jpg'
const blockoutCurtain = 'https://res.cloudinary.com/delwweo7a/image/upload/v1703831273/blockout-curtain_vd23zz.jpg'
const dimoutCurtain = 'https://res.cloudinary.com/delwweo7a/image/upload/v1703831224/dimout_curtain_q1abel.png'

export enum ProductTypeName {
  SHEER_CURTAIN = 'sheerCurtain',
  DOUBLE_CURTAIN = 'doubleCurtain',
  BLOCKOUT_CURTAIN = 'blockoutCurtain',
  DIMOUT_CURTAIN = 'dimoutCurtain',
}

export type ProductType = {
  name: string,
  description: Array<string>,
  src: string,
  typeName: ProductTypeName,
  priceFrom: number,
}

export const productTypeMap = {
  [ProductTypeName.SHEER_CURTAIN]: {
    name: 'Sheer Curtain',
    description: [
      'Softening of Sunlight',
      'Light Diffusion',
      'Elegance and Beauty',
      'Bright, Soft Atmosphere',
      'Natural Light Illumination',
    ],
    src: sheerCurtain,
    typeName: ProductTypeName.SHEER_CURTAIN,
    priceFrom: 265
  },
  [ProductTypeName.BLOCKOUT_CURTAIN]: {
    name: 'Blockout Curtain',
    description: [
      'Block 90% to 100% of light',
      'Energy Efficiency',
      'Total Privacy',
      'Improved Insulation',
      'Sound Absorption'
    ],
    src: blockoutCurtain,
    typeName: ProductTypeName.BLOCKOUT_CURTAIN,
    priceFrom: 347
  },
  [ProductTypeName.DOUBLE_CURTAIN]: {
    name: 'Double Curtain',
    description: [
      'Enhanced Privacy',
      'Light Control',
      'Energy Efficiency',
      'Versatility and Style',
      'Maximized Space Usage'
    ],
    src: doubleCurtain,
    typeName: ProductTypeName.DOUBLE_CURTAIN,
    priceFrom: 547
  },
  [ProductTypeName.DIMOUT_CURTAIN]: {
    name: 'Dimout Curtain',
    description: [
      'Block 60% to 90% of light',
      'Light Control',
      'Total privacy',
      'Energy Efficiency',
      'Noise Reduction'
    ],
    src: dimoutCurtain,
    typeName: ProductTypeName.DIMOUT_CURTAIN,
    priceFrom: 372
  }
}

export const productTypeList = [
  productTypeMap[ProductTypeName.SHEER_CURTAIN],
  productTypeMap[ProductTypeName.BLOCKOUT_CURTAIN],
  productTypeMap[ProductTypeName.DOUBLE_CURTAIN],
  productTypeMap[ProductTypeName.DIMOUT_CURTAIN],
]