import { InputHTMLAttributes } from 'react';

export interface SearchInputComponentPropsInterface extends InputHTMLAttributes<'input'> {
	onValueChange: (next: string) => void;
	isLoading?: boolean;
}
