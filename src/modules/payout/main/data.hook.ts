import { useQuery } from 'react-query';
import { useDebounce } from '@uidotdev/usehooks';
import { PaginationState } from '@tanstack/react-table';
import { apiResourcePayout } from '@/libs/api/resource/payout';

export const usePayoutMainData = ({
	pagination,
	searchQuery: _searchQuery,
}: {
	pagination: PaginationState;
	searchQuery?: string;
}) => {
	const searchQuery = useDebounce(_searchQuery, 300);

	const isSearchMode = searchQuery && searchQuery.length > 1;

	const { data: response, isFetching } = useQuery<
		Awaited<
			| ReturnType<typeof apiResourcePayout.search>
			| ReturnType<typeof apiResourcePayout.payouts>
		>
	>(
		isSearchMode
			? {
					queryKey: ['payout-search', searchQuery],
					queryFn: () => apiResourcePayout.search(searchQuery),
					keepPreviousData: true,
					refetchOnWindowFocus: false,
			  }
			: {
					queryKey: ['payout-list', pagination],
					queryFn: () =>
						apiResourcePayout.payouts({
							page: pagination.pageIndex + 1,
							limit: pagination.pageSize,
						}),
					keepPreviousData: true,
					refetchOnWindowFocus: false,
			  },
	);

	const isSearchResult = Array.isArray(response);

	return {
		data: response ? (isSearchResult ? response : response.data) : undefined,
		metadata: response && !isSearchResult ? response.metadata : undefined,
		isLoading: isFetching,
		isSearchMode,
	};
};
