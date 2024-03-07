import { InputHTMLAttributes } from 'react';

export interface PaginationSizeComponentPropsInterface
	extends Omit<InputHTMLAttributes<'select'>, 'onChange'> {
	onValueChange: (next: number) => void;
	options?: number[];
}
