import styled from 'styled-components';
import { responsiveUtils } from '@/components/responsive/utils';
import { PayoutTableComponent } from '../table/component';

export const PayoutMainStyled = {
	Header: styled.div`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: ${(p) => p.theme.spacing.s4}px;
		gap: ${(p) => p.theme.spacing.s4}px;
		${(p) =>
			responsiveUtils.xs(
				p,
				`
                    flex-direction: row;
                    align-items: center;
        `,
			)};
	`,
	HeaderTitleContainer: styled.div`
		display: flex;
		flex-direction: row;
		align-items: center;
	`,
	HeaderTitleHighlight: styled.div`
		width: 16px;
		height: 32px;
		border-radius: ${(p) => p.theme.radius.r1}px;
		background-color: ${(p) => p.theme.colors.accent};
		margin-right: ${(p) => p.theme.spacing.s3}px;
	`,
	Table: styled(PayoutTableComponent)<{ $isLoading?: boolean }>`
		${(p) =>
			p.$isLoading &&
			`
			&::before {
				content: "";
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background-color: ${p.theme.colors.background};
				z-index: 1;
				opacity: .25;
				cursor: progress;
				border-radius: ${p.theme.radius.r2}px;
			}
		`};
	`,
	Footer: styled.div`
		display: flex;
		justify-content: center;
		margin-top: ${(p) => p.theme.spacing.s4}px;
	`,
};
