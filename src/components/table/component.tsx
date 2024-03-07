import { useCallback } from 'react';
import { Cell, Header, HeaderGroup, Row, flexRender } from '@tanstack/react-table';
import { TableComponentPropsInterface } from './component-props.interface';

export function TableComponent<T>({ source }: TableComponentPropsInterface<T>) {
	const renderHeader = useCallback(
		(header: Header<T, unknown>) => (
			<th key={header.id}>
				{header.isPlaceholder
					? null
					: flexRender(header.column.columnDef.header, header.getContext())}
			</th>
		),
		[],
	);

	const renderHeaderGroup = useCallback(
		(headerGroup: HeaderGroup<T>) => (
			<tr key={headerGroup.id}>{headerGroup.headers.map(renderHeader)}</tr>
		),
		[renderHeader],
	);

	const renderCell = useCallback(
		(cell: Cell<T, unknown>) => (
			<th key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</th>
		),
		[],
	);

	const renderRow = useCallback(
		(row: Row<T>) => <tr key={row.id}>{row.getVisibleCells().map(renderCell)}</tr>,
		[renderCell],
	);

	return (
		<table>
			<thead>{source.getHeaderGroups().map(renderHeaderGroup)}</thead>
			<tbody>{source.getRowModel().rows.map(renderRow)}</tbody>
		</table>
	);
}
