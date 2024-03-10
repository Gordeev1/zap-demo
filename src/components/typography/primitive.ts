import { ThemeWithPropsType } from '@/libs/theme/with-props.type';
import { TypographyProps } from './props.interface';

export const typographyPrimitive = ({
	theme,
	$font = 'main',
	$color,
	$weight,
	$size,
}: Pick<ThemeWithPropsType, 'theme'> & TypographyProps) =>
	[
		$font && `font-family: ${theme.font[$font]};`,
		$color && `color: ${theme.colors[$color]};`,
		$weight && `font-weight: ${theme.fontWeight[$weight]};`,
		$size &&
			`
				font-size: ${theme.fontSize[$size][0]}px;
				letter-spacing: -${theme.fontSize[$size][0] * 0.02}px;
				line-height: ${theme.fontSize[$size][1]}px;
			`,
	]
		.filter(Boolean)
		.join('\n');
