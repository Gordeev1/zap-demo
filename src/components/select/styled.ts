import styled from 'styled-components';
import { ListBoxItem, Popover, Select } from 'react-aria-components';
import { buttonPrimitive } from '../button/primitive';

export const SelectStyled = {
	Main: styled(Select)`
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: ${(p) => p.theme.spacing.s2}px;
	`,
	Popover: styled(Popover)`
		border: 1px solid ${(p) => p.theme.colors.selection};
		border-radius: ${(p) => p.theme.radius.r2}px;
		background: ${(p) => p.theme.colors.background};
		box-shadow: 0 1px 3px ${(p) => p.theme.colors.selection};
	`,

	PopoverListItem: styled(ListBoxItem)`
		padding: 0;
		${({ theme }) => buttonPrimitive({ theme, $variant: 'plain', $shape: 'base' })}
	`,
};
