import { useState } from 'react';
import { SearchInputComponent } from '@/components/search/input/component';
import { LayoutPageComponent } from '@/components/layout/page/component';
import { useLocalizationResources } from '@/libs/localization/resources.hook';
import { TypographyComponent } from '@/components/typography/component';
import { SpinnerComponent } from '@/components/spinner/component';
import { usePayoutMainScrollPostion } from './scroll-position.hook';
import { usePayoutMainData } from './data.hook';
import { PayoutMainStyled } from './styled';

// TODO: Move pagination and search states to url query
export const PayoutMainComponent = () => {
	const [pagination, onPaginationChange] = useState({
		pageIndex: 0,
		pageSize: 10,
	});

	usePayoutMainScrollPostion(pagination);

	const [searchQuery, handleSearchQueryChange] = useState('');

	const { data, metadata, isLoading, isSearchMode } = usePayoutMainData({
		pagination,
		searchQuery,
	});

	const { t } = useLocalizationResources();

	const tableTitleId = 'table-title';

	return (
		<LayoutPageComponent title={t('payout.main.title')}>
			<PayoutMainStyled.Header>
				<PayoutMainStyled.HeaderTitleContainer>
					<PayoutMainStyled.HeaderTitleHighlight />
					<TypographyComponent id={tableTitleId} as='h2' $size='lg' $weight='bold'>
						{t('payout.table.title')}
					</TypographyComponent>
				</PayoutMainStyled.HeaderTitleContainer>
				<SearchInputComponent
					value={searchQuery}
					onValueChange={handleSearchQueryChange}
					isLoading={Boolean(isSearchMode && isLoading)}
					placeholder={t('payout.main.search-placeholder')}
				/>
			</PayoutMainStyled.Header>
			<PayoutMainStyled.Table
				$isLoading={isLoading}
				aria-labelledby={tableTitleId}
				data={data}
				metadata={metadata}
				pagination={pagination}
				onPaginationChange={onPaginationChange}
			/>
			{isLoading && !data && (
				<PayoutMainStyled.Footer>
					<SpinnerComponent />
				</PayoutMainStyled.Footer>
			)}
			{!isLoading && data && data.length === 0 && (
				<PayoutMainStyled.Footer>
					<TypographyComponent $size='md' $color='font-main' $weight='medium'>
						{t('payout.main.empty')}
					</TypographyComponent>
				</PayoutMainStyled.Footer>
			)}
		</LayoutPageComponent>
	);
};
