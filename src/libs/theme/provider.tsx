import { FC, PropsWithChildren } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { theme } from '.';
import { ThemeStyled } from './styled';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProviderStyled theme={theme}>
			<ThemeStyled />
			{children}
		</ThemeProviderStyled>
	);
};
