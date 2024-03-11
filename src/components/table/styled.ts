import styled from 'styled-components';
import { Table, Cell as TableCell, Row as TableRow, Column } from 'react-aria-components';
import { typographyPrimitive } from '../typography/primitive';
import { TypographyProps } from '../typography/props.interface';

export const TableStyled = {
	Container: styled.div`
		width: 100%;
		overflow-x: scroll;
		display: flex;
	`,
	Table: styled(Table)`
		flex: 1;
		position: relative;
		outline: none;
		border-spacing: 0;
		forced-color-adjust: none;
	`,
	Cell: styled(TableCell)`
		width: 170px;
		min-width: 170px;
		vertical-align: middle;
		outline-color: ${(p) => p.theme.colors.accent};
		&:first-child {
			padding-left: ${(p) => p.theme.spacing.s4}px;
		}
		&:last-child {
			padding-right: ${(p) => p.theme.spacing.s4}px;
		}
	`,
	Column: styled(Column)<TypographyProps>`
		height: 44px;
		outline-color: ${(p) => p.theme.colors.accent};
		vertical-align: middle;
		text-align: start;
		padding: 0 ${(p) => p.theme.spacing.s4}px;
		${({ theme }) =>
			typographyPrimitive({
				theme,
				$font: 'main',
				$weight: 'medium',
				$size: 'sm',
				$color: 'font-secondary',
			})};
	`,
	Row: styled(TableRow)`
		height: 48px;
		outline-color: ${(p) => p.theme.colors.accent};
		&:nth-child(odd) {
			background-color: ${(p) => p.theme.colors.selection};
		}
	`,
};
