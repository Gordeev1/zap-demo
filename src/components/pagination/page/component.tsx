import { FC, useCallback } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import { PaginationPageComponentPropsInterface } from './component-props.interface';

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
		<div>
			<ReactPaginate
				initialPage={initialValue}
				breakLabel='...'
				nextLabel='> >'
				previousLabel='<'
				marginPagesDisplayed={1}
				pageRangeDisplayed={3}
				pageCount={lastPage}
				onPageChange={handleChange}
			/>
		</div>
	);
};
