import { InputHTMLAttributes } from 'react';

export interface SearchInputComponentPropsInterface
	extends Pick<InputHTMLAttributes<'input'>, 'value' | 'placeholder'> {
	onValueChange: (next: string) => void;
	isLoading?: boolean;
}
