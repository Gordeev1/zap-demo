import styled from 'styled-components';
import { typographyPrimitive } from './primitive';
import { TypographyProps } from './props.interface';

export const TypographyComponent = styled.span<TypographyProps>`
	${typographyPrimitive};
`;
