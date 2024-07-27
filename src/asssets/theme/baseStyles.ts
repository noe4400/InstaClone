import spacing from '@/asssets/theme/spacing';
import * as font from '@/asssets/theme/font';
import { customStyles } from '@/asssets/theme/types';

const baseStyles: customStyles = {
    container: {
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.md,
        width: '100%',
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    verticalMargin: {
        marginVertical: spacing.sm,
    },
    horizontalMargin: {
        marginHorizontal: spacing.sm,
    },
    imageStyle: {
        width: '100%',
        aspectRatio: 1,
    },
    boldText: {
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: font.size.lg,
        fontWeight: font.weight.bold,
    },
    subText: {
        fontSize: font.size.md,
        fontWeight: font.weight.semi,
    },
};

export default baseStyles;
