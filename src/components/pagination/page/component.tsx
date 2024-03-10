import { FC, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { ReactPaginateProps } from 'react-paginate';
import { PaginationPageComponentPropsInterface } from './component-props.interface';
import { PaginationPageStyled } from './styled';

export const PaginationPageComponent: FC<PaginationPageComponentPropsInterface> = ({
	initialValue,
	onValueChange,
	lastPage,
}) => {
	const handleChange = useCallback<Required<ReactPaginateProps>['onPageChange']>(
		(e) => onValueChange(e.selected),
		[onValueChange],
	);

	return (
		<PaginationPageStyled.Main
			initialPage={initialValue}
			breakLabel='...'
			previousLabel={<ChevronLeftIcon width={20} height={20} />}
			nextLabel={<ChevronRightIcon width={20} height={20} />}
			marginPagesDisplayed={1}
			pageRangeDisplayed={3}
			pageCount={lastPage}
			disableInitialCallback
			onPageChange={handleChange}
		/>
	);
};
