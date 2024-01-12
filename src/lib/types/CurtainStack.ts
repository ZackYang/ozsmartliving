export type CurtainStackType = {
  name: string,
  publicId: string,
}

export enum curtainStackTypekey {
  LEFT_STACK = 'left-stack',
  RIGHT_STACK = 'right-stack',
  CENTER_OPEN = 'center-open',
  MULTIPLE_PANELS = 'multiple-panels',
}

export const curtainStackTypeMapping = {
  'left-stack': {
    key: curtainStackTypekey.LEFT_STACK,
    name: 'Left Stack',
    publicId: 'leftstack_h0mq42'
  },
  'right-stack': {
    key: curtainStackTypekey.RIGHT_STACK,
    name: 'Right Stack',
    publicId: 'rightstackpng_te0eg9'
  },
  'center-open': {
    key: curtainStackTypekey.CENTER_OPEN,
    name: 'Center Open',
    publicId: 'centeropen_fflzmg'
  },
  'multiple-panels': {
    key: curtainStackTypekey.MULTIPLE_PANELS,
    name: 'Multiple Panels',
    publicId: 'multiplepanels_altedc'
  },
}

export const curtainStackTypeList = [
  curtainStackTypeMapping['left-stack'],
  curtainStackTypeMapping['right-stack'],
  curtainStackTypeMapping['center-open'],
  // curtainStackTypeMapping['multiple-panels'],
]