import { buttonPrimitive } from '@/components/button/primitive';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const breakClassName = 'pp-break';
const breakLinkClassName = 'pp-break-link';
const pageClassName = 'pp-page';
const previousClassName = 'pp-previous';
const nextClassName = 'pp-next';
const pageLinkClassName = 'pp-page-link';
const activeClassName = 'pp-active';
const activeLinkClassName = 'pp-active-link';
const previousLinkClassName = 'pp-previous-link';
const nextLinkClassName = 'pp-next-link';
const disabledClassName = 'pp-disabled';
const disabledLinkClassName = 'pp-disabled-link';

export const PaginationPageStyled = {
	Main: styled(ReactPaginate).attrs({
		breakClassName,
		breakLinkClassName,
		pageClassName,
		previousClassName,
		nextClassName,
		pageLinkClassName,
		activeClassName,
		activeLinkClassName,
		previousLinkClassName,
		nextLinkClassName,
		disabledClassName,
		disabledLinkClassName,
	})`
		display: flex;
		flex-direction: row;
		gap: ${(p) => p.theme.spacing.s2}px;

		.${pageLinkClassName}:not(.${activeLinkClassName}),
		.${previousLinkClassName}, .${nextLinkClassName}, .${breakLinkClassName} {
			${({ theme }) => buttonPrimitive({ theme, $variant: 'plain', $shape: 'base-circle' })}
		}

		.${activeLinkClassName} {
			${({ theme }) =>
				buttonPrimitive({
					theme,
					$variant: 'filled-accent',
					$shape: 'base-circle',
				})};
		}
	`,
};
