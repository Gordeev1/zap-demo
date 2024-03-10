import { FC, useCallback } from 'react';
import { ListBox, SelectValue } from 'react-aria-components';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { TypographyComponent } from '@/components/typography/component';
import { ButtonComponent } from '@/components/button/component';
import { SelectComponentPropsInterface } from './component-props.interface';
import { SelectStyled } from './styled';

export const SelectComponent: FC<SelectComponentPropsInterface> = ({
	value,
	onValueChange,
	options,
	label,
}) => {
	const renderOption = useCallback(
		(option: number) => (
			<SelectStyled.PopoverListItem id={option} key={option}>
				{option.toString()}
			</SelectStyled.PopoverListItem>
		),
		[],
	);

	const handleChange = useCallback(
		(v: string | number) => onValueChange(Number(v)),
		[onValueChange],
	);

	return (
		<SelectStyled.Main
			selectedKey={value}
			onSelectionChange={handleChange}
			isDisabled={!options || !options.length}>
			{label && (
				<TypographyComponent $size='md' $color='font-secondary' $weight='medium'>
					{label}
				</TypographyComponent>
			)}
			<ButtonComponent $variant='outlined' $shape='base'>
				<SelectValue />
				<span aria-hidden='true'>
					<CaretDownIcon width={20} height={20} />
				</span>
			</ButtonComponent>
			{options && options.length > 0 && (
				<SelectStyled.Popover>
					<ListBox>{options.map(renderOption)}</ListBox>
				</SelectStyled.Popover>
			)}
		</SelectStyled.Main>
	);
};
