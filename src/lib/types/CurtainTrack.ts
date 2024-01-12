export type CurtainTrackType = {
  name: string,
  publicId: string,
}

export enum curtainTrackTypekey {
  residential = 'residential',
  designer = 'designer',
}

export const curtainTrackTypeMapping = {
  'residential': {
    key: curtainTrackTypekey.residential,
    name: 'Residential',
    desc: 'Suitable for most ceiling/top mounting applications',
    publicId: 'residential_nia7sl'
  },
  'designer': {
    key: curtainTrackTypekey.designer,
    name: 'Designer',
    desc: 'Suitable for most face/wall mounting applications',
    publicId: 'designer_remu2k'
  },
}

export const curtainTrackTypeList = [
  curtainTrackTypeMapping['residential'],
  curtainTrackTypeMapping['designer'],
]