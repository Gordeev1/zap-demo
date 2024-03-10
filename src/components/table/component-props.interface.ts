import { Table } from '@tanstack/react-table';
import { TableProps } from 'react-aria-components';

export interface TableComponentPropsInterface<T> extends TableProps {
	source: Table<T>;
}
