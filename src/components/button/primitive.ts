import { ThemeWithPropsType } from '@/libs/theme/with-props.type';
import { ButtonPropsInterface } from './props.interface';
import { typographyPrimitive } from '../typography/primitive';

export const buttonPrimitive = ({
	theme,
	$variant = 'outlined',
	$shape = 'base',
}: Pick<ThemeWithPropsType, 'theme'> & ButtonPropsInterface) =>
	[
		// Defaults
		`
            outline-color: ${theme.colors.accent};
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            transition: opacity .25s ease-in-out, background-color .25s ease-in-out;
            
            &:focus, &:focus-visible { outline: none };
            
            &:not(:disabled):not([aria-disabled="true"]) {
                cursor: pointer;
            }
            &:disabled, &[aria-disabled="true"] {
                opacity: 0.5;
                cursor: not-allowed;
            }
        `,
		typographyPrimitive({ theme, $weight: 'medium' }),

		// Shapes
		['plain', 'base', 'base-circle'].includes($shape) &&
			`
            height: 32px;
            ${typographyPrimitive({ theme, $size: 'md' })};
        `,
		['plain', 'base'].includes($shape) &&
			`
            min-width: 56px;
            padding: ${theme.spacing.s1}px ${theme.spacing.s2}px;
        `,
		$shape === 'base' && `border-radius: ${theme.radius.r2}px;`,
		$shape === 'base-circle' &&
			`
            border-radius: 50%;
            width: 32px;
        `,

		// Variants
		['plain', 'outlined'].includes($variant) &&
			`
            background-color: transparent;
            ${typographyPrimitive({ theme, $color: 'font-main' })}
            &:not(:disabled):not([aria-disabled="true"]):hover, &:focus, &:focus-visible {
                background-color: ${theme.colors.selection};
            }
        `,
		$variant === 'outlined' && `border: 1px solid ${theme.colors.selection};`,
		$variant === 'filled-accent' &&
			`
            border: none;
            background-color: ${theme.colors.accent};
            &:not(:disabled):not([aria-disabled="true"]):hover, &:focus, &:focus-visible { opacity: 0.75; }
            ${typographyPrimitive({ theme, $color: 'font-on-accent' })}
        `,
	]
		.filter(Boolean)
		.join('\n');
