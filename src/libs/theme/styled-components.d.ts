import 'styled-components';
import { ThemeType } from './type';

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
