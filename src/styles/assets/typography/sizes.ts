'use client';

interface IFontSize {
    [key: string]: string
}

interface IFontWeight {
    [key: string]: number
}

export const fontSizes: IFontSize = {
    sizeJumbo: 	    '48px',
    sizeMega: 		'34px',
    sizeMaintitle:  '24px',
    sizeTitle: 	    '20px',
    sizeSubtitle: 	'16px',
    sizeBody: 		'14px',
    sizeSmall: 	    '12px'
}

export const fontWeights: IFontWeight = {
    weightNormal: 400,
    weightSemiBold: 600,
    weightBold: 700
}