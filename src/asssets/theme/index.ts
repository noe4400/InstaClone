import { StyleSheet } from 'react-native';
import colors from '@/asssets/theme/colors';
import spacing from '@/asssets/theme/spacing';
import baseStyles from '@/asssets/theme/baseStyles';
import * as font from '@/asssets/theme/font';
import { customStyles } from '@/asssets/theme/types';

const theme = { colors, spacing, baseStyles, font };

type callbackType = (theme: any, baseStyles: customStyles) => customStyles;

export const createStyles = (cb: callbackType): customStyles => {
    return StyleSheet.create({
        ...baseStyles,
        ...cb(theme, baseStyles),
    });
};
