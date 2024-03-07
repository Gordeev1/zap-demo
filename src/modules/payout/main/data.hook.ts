import { useQuery } from 'react-query';
import { apiResourcePayout } from '@/libs/api/resource/payout';
import { PaginationState } from '@tanstack/react-table';

export const usePayoutMainData = ({
	pagination,
	searchQuery,
}: {
	pagination: PaginationState;
	searchQuery?: string;
}) => {
	const isSearchMode = searchQuery && searchQuery.length > 1;

	const { data: response, isLoading } = useQuery<
		Awaited<
			ReturnType<typeof apiResourcePayout.search> | ReturnType<typeof apiResourcePayout.payouts>
		>
	>(
		isSearchMode
			? {
					queryKey: ['payout-search', searchQuery],
					queryFn: () => apiResourcePayout.search(searchQuery),
					keepPreviousData: true,
			}
			: {
					queryKey: ['payout-list', pagination],
					queryFn: () =>
						apiResourcePayout.payouts({
							page: pagination.pageIndex + 1,
							limit: pagination.pageSize,
						}),
					keepPreviousData: true,
			},
	);

	const isSearchResult = Array.isArray(response);

	return {
		data: response ? (isSearchResult ? response : response.data) : undefined,
		metadata: response && !isSearchResult ? response.metadata : undefined,
		isLoading,
		isSearchMode,
	};
};
