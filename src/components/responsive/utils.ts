import { ThemeWithPropsType } from '@/libs/theme/with-props.type';

const minWidth = (breakpoint: number, code: string) =>
	`@media screen and (min-width: ${breakpoint}px) { ${code}; }`;

export const responsiveUtils = {
	xs: (p, code) => minWidth(p.theme.breakpoints.xs, code),
	sm: (p, code) => minWidth(p.theme.breakpoints.sm, code),
	md: (p, code) => minWidth(p.theme.breakpoints.md, code),
	lg: (p, code) => minWidth(p.theme.breakpoints.lg, code),
	xl: (p, code) => minWidth(p.theme.breakpoints.xl, code),
} satisfies Record<string, (p: Pick<ThemeWithPropsType, 'theme'>, code: string) => string>;
