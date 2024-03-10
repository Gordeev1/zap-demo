import styled from 'styled-components';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Input, Label, SearchField } from 'react-aria-components';
import { typographyPrimitive } from '@/components/typography/primitive';
import { TypographyProps } from '@/components/typography/props.interface';

export const SearchInputStyled = {
	Container: styled(SearchField)`
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: ${(p) => p.theme.spacing.s1}px ${(p) => p.theme.spacing.s2}px;
		gap: ${(p) => p.theme.spacing.s1}px;
		border-radius: ${(p) => p.theme.radius.r2}px;
		border: 1px solid ${(p) => p.theme.colors.selection};
		cursor: text;
		transition: border-color 0.25s ease-in-out;

		&:not(:disabled):hover,
		&:focus-within {
			border-color: ${(p) => p.theme.colors.accent};
		}
	`,
	Icon: styled(MagnifyingGlassIcon)`
		color: ${(p) => p.theme.colors['font-main']};
	`,
	Label: styled(Label)`
		display: flex;
		cursor: text;
	`,
	Input: styled(Input)<TypographyProps>`
		flex: 1;
		padding: 0;
		appearance: none;
		border: none;
		outline: none !important;
		${({ theme }) =>
			typographyPrimitive({
				theme,
				$font: 'main',
				$color: 'font-main',
				$weight: 'regular',
				$size: 'md',
			})};
		::placeholder {
			color: ${(p) => p.theme.colors['font-secondary']};
		}
		&::-webkit-search-cancel-button,
		&::-webkit-search-decoration {
			cursor: pointer;
		}
	`,
};
