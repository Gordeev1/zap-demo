export interface PaginationPageComponentPropsInterface {
	initialValue: number;
	onValueChange: (next: number) => void;
	lastPage: number;
}
