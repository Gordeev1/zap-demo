import { useState } from 'react';
import { SearchInputComponent } from '@/libs/search/input/component';
import { LayoutPageComponent } from '@/components/layout/page/component';
import { useLocalizationResources } from '@/libs/localization/resources.hook';
import { PayoutTableComponent } from '../table/component';
import { usePayoutMainData } from './data.hook';

export const PayoutMainComponent = () => {
	const [pagination, onPaginationChange] = useState({
		pageIndex: 0,
		pageSize: 10,
	});

	const [searchQuery, handleSearchQueryChange] = useState('');

	const { data, metadata, isLoading, isSearchMode } = usePayoutMainData({
		pagination,
		searchQuery,
	});

	const { t } = useLocalizationResources();

	return (
		<LayoutPageComponent title={t('payout.main.title')}>
			<h2>{t('payout.table.title')}</h2>
			<SearchInputComponent
				value={searchQuery}
				onValueChange={handleSearchQueryChange}
				isLoading={Boolean(isSearchMode && isLoading)}
			/>
			<PayoutTableComponent
				data={data}
				metadata={metadata}
				pagination={pagination}
				onPaginationChange={onPaginationChange}
			/>
		</LayoutPageComponent>
	);
};
