import { ChangeEventHandler, FC, useCallback, useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { SearchInputComponentPropsInterface } from './component-props.interface';

export const SearchInputComponent: FC<SearchInputComponentPropsInterface> = ({
	value,
	onValueChange,
}) => {
	const ref = useRef<HTMLInputElement>(null);
	useHotkeys('mod+k', () => ref.current?.focus());

	const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
		(e) => onValueChange(e.target.value),
		[onValueChange],
	);

	return <input ref={ref} value={value} onChange={handleChange} />;
};
