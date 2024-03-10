import { ThemeType } from '@/libs/theme/type';

export interface BadgeComponentPropsInterface {
	$variant: keyof Pick<ThemeType['colors'], 'neutral' | 'positive'>;
}
