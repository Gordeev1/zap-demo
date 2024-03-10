import { ThemeType } from '@/libs/theme/type';
import styled, { keyframes } from 'styled-components';

interface Props {
	$size?: number;
	$color?: keyof Pick<ThemeType['colors'], 'neutral'>;
}

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const defaultSize = 30;

export const SpinnerComponent = styled.span<Props>`
	width: ${(p) => p['$size'] || defaultSize}px;
	height: ${(p) => p['$size'] || defaultSize}px;
	border: ${(p) => (p.$size || defaultSize) * 0.1}px solid transparent;
	border-bottom-color: ${(p) => p.theme.colors[p.$color || 'neutral']};
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: ${rotate} 1s linear infinite;
`;
