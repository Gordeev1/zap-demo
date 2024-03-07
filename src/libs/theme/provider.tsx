import { FC, PropsWithChildren } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { theme } from '.';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	return <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>;
};
