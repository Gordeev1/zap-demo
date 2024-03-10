import { ThemeType } from '@/libs/theme/type';

type FontKey = keyof ThemeType['font'];
type ColorKey<T = keyof ThemeType['colors']> = T extends `font-${string}` ? T : never;
type WeightKey = keyof ThemeType['fontWeight'];
type SizeKey = keyof ThemeType['fontSize'];

interface TypographyPropsFont {
	$font?: FontKey;
}
interface TypographyPropsColor {
	$color?: ColorKey;
}
interface TypographyPropsWeight {
	$weight?: WeightKey;
}
interface TypographyPropsSize {
	$size?: SizeKey;
}

export interface TypographyProps
	extends TypographyPropsFont,
		TypographyPropsColor,
		TypographyPropsWeight,
		TypographyPropsSize {}
