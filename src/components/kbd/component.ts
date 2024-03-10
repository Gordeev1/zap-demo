import styled from 'styled-components';
import { TypographyComponent } from '../typography/component';

export const KbdComponent = styled(TypographyComponent).attrs({
	$size: 'md',
	$weight: 'regular',
	$color: 'font-main',
	as: 'kbd',
})`
	/* TODO: extract to theme */
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 2px 0 0 rgba(255, 255, 255, 0.7);
	background-color: ${(p) => p.theme.colors.selection};
	padding: 3px 6px;
	border-radius: ${(p) => p.theme.radius.r1}px;
	box-sizing: border-box;
`;
