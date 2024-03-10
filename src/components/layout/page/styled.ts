import { responsiveUtils } from '@/components/responsive/utils';
import styled from 'styled-components';

export const LayoutPageStyled = {
	Container: styled.div`
		padding: ${(p) => p.theme.spacing.s4}px ${(p) => p.theme.spacing.s4}px;
		${(p) =>
			responsiveUtils.sm(p, `padding: ${p.theme.spacing.s6}px ${p.theme.spacing.s8}px;`)};
		max-width: ${(p) => p.theme.breakpoints.xl}px;
		margin: 0 auto;
	`,
	Content: styled.div`
		padding-top: ${(p) => p.theme.spacing.s6}px;
		${(p) =>
			responsiveUtils.sm(
				p,
				`
                    padding-left: ${p.theme.spacing.s4}px;
                    padding-right: ${p.theme.spacing.s4}px;
                    padding-top: ${p.theme.spacing.s10}px;
        `,
			)}
	`,
};
