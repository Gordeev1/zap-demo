import { localizationResources } from '@/libs/localization/resources';
import { TranslationsKeyType } from '@/libs/localization/translations/key.type';

export const payoutStatusLabel = (value: string) => {
	const key = `payout.status.${value}`;
	return localizationResources.exist(key)
		? localizationResources.t(key as TranslationsKeyType)
		: value;
};
