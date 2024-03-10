import { responsiveUtils } from '@/components/responsive/utils';
import styled from 'styled-components';

export const PayoutTableStyled = {
	PaginationContainer: styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		${(p) => responsiveUtils.xs(p, `flex-direction: row`)};
		justify-content: space-between;
		margin-top: ${(p) => p.theme.spacing.s4}px;
		gap: ${(p) => p.theme.spacing.s4}px;
	`,
};
