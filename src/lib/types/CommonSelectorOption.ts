export interface CommonSelectorOption {
    name: string;
    value: string;
    image?: string;
    desc?: string;
}

export interface CommonSelectorProps {
    title?: string;
    options: CommonSelectorOption[];
    selected?: CommonSelectorOption | null;
    onSelected?: (selected: any) => void;
}

export const curtainStackTypes = [
    {
        name: 'Left Stack',
        value: 'left-stack',
        image: 'leftstack_h0mq42',
    },
    {
        name: 'Right Stack',
        value: 'right-stack',
        image: 'rightstackpng_te0eg9',
    },
    {
        name: 'Center Open',
        value: 'center-open',
        image: 'centeropen_fflzmg',
    },
    {
        name: 'Multiple Panels',
        value: 'multiple-panels',
        image: 'multiplepanels_altedc',
    },
]

export const curtainFittingTypes = [
    {
        name: 'Ceilling/Top Mount',
        value: 'top-mount',
        image: 'ceillingmount_utjw1i',
    },
    {
        name: 'Face Mount',
        value: 'face-mount',
        image: 'wallmount_xbiul8',
    },
]

export const curtainHeadTypes = [
    {
        name: 'Double Pleat',
        value: 'double-pleat',
        image: 'DoublePinchPleat_Curtains_Style_hdzqe1',
    },
    {
        name: 'Triple Pleat',
        value: 'triple-pleat',
        image: 'TriplePinchPleat_Curtains_Style_owk7ev',
    },
    {
        name: 'Pencil Pleat',
        value: 'pencil-pleat',
        image: 'Pencil_Curtains_Style_ffmo8x',
    },
    {
        name: 'S Fold',
        value: 's-fold',
        image: 'SFold_Curtains_Style_ajtji1',
    },
]

export const curtainFinishTypes = [
    {
        name: 'Off Floor',
        value: 'off-floor',
        image: 'finish-just-off-floor_sl79d4',
    },
    {
        name: 'Touch Floor',
        value: 'touch-floor',
        image: 'finish-touch-floor_az6mbm',
    },
    {
        name: 'Puddle',
        value: 'puddle',
        image: 'finish-puddled_xzd5l7',
    },
]

export const curtainTrackTypes = [
    {
        name: 'Residential',
        value: 'residential',
        image: 'residential_nia7sl',
    },
    {
        name: 'Designer',
        value: 'designer',
        image: 'designer_remu2k',
    },
]
