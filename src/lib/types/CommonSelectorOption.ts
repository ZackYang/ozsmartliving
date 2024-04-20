export interface CommonSelectorOption {
    label: string;
    value: string;
    image?: string;
    desc?: string;
}

export interface CommonSelectorProps {
    title?: string;
    options: CommonSelectorOption[];
    selected?: CommonSelectorOption | null;
    onSelected?: (option: CommonSelectorOption) => void;
}

export const curtainStackTypes = [
    {
        label: 'Left Stack',
        value: 'left-stack',
        image: 'leftstack_h0mq42',
    },
    {
        label: 'Right Stack',
        value: 'right-stack',
        image: 'rightstackpng_te0eg9',
    },
    {
        label: 'Center Open',
        value: 'center-open',
        image: 'centeropen_fflzmg',
    },
    {
        label: 'Multiple Panels',
        value: 'multiple-panels',
        image: 'multiplepanels_altedc',
    },
]

export const curtainFittingTypes = [
    {
        label: 'Ceilling/Top Mount',
        value: 'top-mount',
        image: 'ceillingmount_utjw1i',
    },
    {
        label: 'Face Mount',
        value: 'face-mount',
        image: 'wallmount_xbiul8',
    },
]

export const curtainHeadTypes = [
    {
        label: 'Double Pleat',
        value: 'double-pleat',
        image: 'DoublePinchPleat_Curtains_Style_hdzqe1',
    },
    {
        label: 'Triple Pleat',
        value: 'triple-pleat',
        image: 'TriplePinchPleat_Curtains_Style_owk7ev',
    },
    {
        label: 'Pencil Pleat',
        value: 'pencil-pleat',
        image: 'Pencil_Curtains_Style_ffmo8x',
    },
    {
        label: 'S Fold',
        value: 's-fold',
        image: 'SFold_Curtains_Style_ajtji1',
    },
]

export const curtainFinishTypes = [
    {
        label: 'Off Floor',
        value: 'off-floor',
        image: 'finish-just-off-floor_sl79d4',
    },
    {
        label: 'Touch Floor',
        value: 'touch-floor',
        image: 'finish-touch-floor_az6mbm',
    },
    {
        label: 'Puddle',
        value: 'puddle',
        image: 'finish-puddled_xzd5l7',
    },
]

export const curtainTrackTypes = [
    {
        label: 'Residential',
        value: 'residential',
        image: 'residential_nia7sl',
    },
    {
        label: 'Designer',
        value: 'designer',
        image: 'designer_remu2k',
    },
]

// export type CurtainTrackType = {
//     name: string,
//     publicId: string,
// }

// export enum curtainTrackTypekey {
//     residential = 'residential',
//     designer = 'designer',
// }

// export const curtainTrackTypeMapping = {
//     'residential': {
//         key: curtainTrackTypekey.residential,
//         name: 'Residential',
//         desc: 'Suitable for most ceiling/top mounting applications',
//         publicId: 'residential_nia7sl'
//     },
//     'designer': {
//         key: curtainTrackTypekey.designer,
//         name: 'Designer',
//         desc: 'Suitable for most face/wall mounting applications',
//         publicId: 'designer_remu2k'
//     },
// }

// export const curtainTrackTypeList = [
//     curtainTrackTypeMapping['residential'],
//     curtainTrackTypeMapping['designer'],
// ]