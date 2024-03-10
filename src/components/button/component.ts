import styled from 'styled-components';
import { Button } from 'react-aria-components';
import { buttonPrimitive } from './primitive';
import { ButtonPropsInterface } from './props.interface';

export const ButtonComponent = styled(Button)<ButtonPropsInterface>`
	${buttonPrimitive};
`;
