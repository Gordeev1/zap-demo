import { ApiClientInstanceType } from '@/libs/api/client/instance.type';
import {
	ApiResourceTypesRequestPaginatedParamsInterface,
	ApiResourceTypesResponsePaginatedInterface,
} from '../types';
import { PayoutInterface } from './interface.interface';

export const apiResourcePayoutFactory = (instance: ApiClientInstanceType) => {
	return {
		payouts: ({ page = 1, limit = 10 }: ApiResourceTypesRequestPaginatedParamsInterface) => {
			const qs = Object.entries({ page, limit })
				.filter(([, value]) => Boolean(value))
				.map(([key, value]) => [key, value].join('='))
				.join('&');

			return instance
				.get<ApiResourceTypesResponsePaginatedInterface<PayoutInterface>>(
					`analytics/tech-test/payouts?${qs}`,
				)
				.then((r) => r.data);
		},
		search: (query: string) =>
			instance
				.get<PayoutInterface[]>(`analytics/tech-test/search?query=${query}`)
				.then((r) => r.data),
	};
};
