export interface SelectComponentPropsInterface {
	value: number;
	onValueChange: (next: number) => void;
	options?: number[];
	label?: string;
}
