import { ChangeEventHandler, FC, useCallback, useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { platform } from '@/libs/platform';
import { SpinnerComponent } from '@/components/spinner/component';
import { KbdComponent } from '@/components/kbd/component';
import { SearchInputComponentPropsInterface } from './component-props.interface';
import { SearchInputStyled } from './styled';

export const SearchInputComponent: FC<SearchInputComponentPropsInterface> = ({
	value,
	onValueChange,
	isLoading,
	placeholder,
}) => {
	const ref = useRef<HTMLInputElement>(null);
	useHotkeys('mod+k', () => ref.current?.focus());

	const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
		(e) => onValueChange(e.target.value),
		[onValueChange],
	);

	return (
		<SearchInputStyled.Container>
			<SearchInputStyled.Label>
				{isLoading ? (
					<SpinnerComponent $size={20} />
				) : (
					<SearchInputStyled.Icon width={20} height={20} />
				)}
			</SearchInputStyled.Label>
			<SearchInputStyled.Input
				ref={ref}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				aria-label={placeholder}
				type='search'
				inputMode='search'
			/>
			{/* TODO: detect and display only if hardware keyboard is available instead (e.g. desktop) */}
			<SearchInputStyled.Label>
				<KbdComponent>{platform.isMacos ? '⌘' : 'CTRL'} + K</KbdComponent>
			</SearchInputStyled.Label>
		</SearchInputStyled.Container>
	);
};
