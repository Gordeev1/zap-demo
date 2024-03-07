import get from 'lodash/get';
import isNil from 'lodash/isNil';
import { TranslationsKeyType } from './translations/key.type';
import translationsEn from './translations/en.json';

// TODO: replace with lib
export const localizationResources = {
	t: (key: TranslationsKeyType, variables?: Record<string, string | number | undefined>) => {
		const string = get(translationsEn, key);
		return Object.entries(variables || {}).reduce(
			(result, [variable, value]) =>
				result.replaceAll(`{{ ${variable} }}`, `${isNil(value) ? '' : value}`),
			string,
		);
	},
	exist: (key: string) => {
		const string = get(translationsEn, key);
		return Boolean(string);
	},
};
