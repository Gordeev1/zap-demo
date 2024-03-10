import styled from 'styled-components';
import { TypographyComponent } from '../typography/component';
import { BadgeComponentPropsInterface } from './component-props.interface';

export const BadgeComponent = styled(TypographyComponent).attrs<BadgeComponentPropsInterface>({
	$size: 'md',
	$weight: 'bold',
	$color: 'font-main',
})<BadgeComponentPropsInterface>`
	background-color: ${(p) => p.theme.colors[p['$variant']]};
	padding: ${(p) => p.theme.spacing.s1}px ${(p) => p.theme.spacing.s2}px;
	border-radius: ${(p) => p.theme.radius.r2}px;
`;
