import { ChangeEventHandler, FC, useCallback } from 'react';
import { PaginationSizeComponentPropsInterface } from './component-props.interface';

const defaultOptions = [10, 25, 50];

export const PaginationSizeComponent: FC<PaginationSizeComponentPropsInterface> = ({
	value,
	onValueChange,
	options = defaultOptions,
}) => {
	const renderOption = useCallback(
		(option: number) => (
			<option key={option} value={option}>
				{option}
			</option>
		),
		[],
	);

	const handleChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
		(e) => onValueChange(Number(e.target.value)),
		[onValueChange],
	);

	return (
		<select value={value} onChange={handleChange}>
			{options.map(renderOption)}
		</select>
	);
};
