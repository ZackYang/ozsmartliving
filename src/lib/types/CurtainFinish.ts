export type CurtainFinishType = {
  name: string,
  publicId: string,
}

export enum curtainFinishTypekey {
  offFloor = 'off-floor',
  touchFloor = 'touch-floor',
  puddle = 'puddle',
}

export const curtainFinishTypeMapping = {
  'off-floor': {
    key: curtainFinishTypekey.offFloor,
    name: 'Off Floor',
    desc: 'Curtains will be 1cm off the floor(classic look)',
    publicId: 'finish-just-off-floor_sl79d4'
  },
  'touch-floor': {
    key: curtainFinishTypekey.touchFloor,
    name: 'Touch Floor',
    desc: 'Curtains will touch the floor',
    publicId: 'finish-touch-floor_az6mbm'
  },
  'puddle': {
    key: curtainFinishTypekey.puddle,
    name: 'Puddle',
    desc: 'Curtains will puddle on the floor',
    publicId: 'finish-puddled_xzd5l7'
  },
}

export const curtainFinishTypeList = [
  curtainFinishTypeMapping['off-floor'],
  curtainFinishTypeMapping['touch-floor'],
  curtainFinishTypeMapping['puddle'],
]