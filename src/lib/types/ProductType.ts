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
  type: ProductTypeName,
  priceFrom: number,
}

export const productTypeList = [
  {
    name: 'Sheer Curtain',
    description: [
      'Softening of Sunlight',
      'Light Diffusion',
      'Elegance and Beauty',
      'Bright, Soft Atmosphere',
      'Natural Light Illumination',
    ],
    src: sheerCurtain,
    type: ProductTypeName.SHEER_CURTAIN,
    priceFrom: 265
  },
  {
    name: 'Blockout Curtain',
    description: [
      'Block 90% to 100% of light',
      'Energy Efficiency',
      'Total Privacy',
      'Improved Insulation',
      'Sound Absorption'
    ],
    src: blockoutCurtain,
    type: ProductTypeName.BLOCKOUT_CURTAIN,
    priceFrom: 347
  },
  {
    name: 'Double Curtain',
    description: [
      'Enhanced Privacy',
      'Light Control',
      'Energy Efficiency',
      'Versatility and Style',
      'Maximized Space Usage'
    ],
    src: doubleCurtain,
    type: ProductTypeName.DOUBLE_CURTAIN,
    priceFrom: 547
  },
  {
    name: 'Dimout Curtain',
    description: [
      'Block 60% to 90% of light',
      'Light Control',
      'Total privacy',
      'Energy Efficiency',
      'Noise Reduction'
    ],
    src: dimoutCurtain,
    type: ProductTypeName.DIMOUT_CURTAIN,
    priceFrom: 372
  }

]