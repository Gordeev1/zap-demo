import { useCallback } from 'react';
import { TableBody, TableHeader } from 'react-aria-components';
import { Cell, Header, HeaderGroup, Row, flexRender } from '@tanstack/react-table';
import { TableComponentPropsInterface } from './component-props.interface';
import { TableStyled } from './styled';

export function TableComponent<T>({ source, ...props }: TableComponentPropsInterface<T>) {
	const renderHeader = useCallback(
		(header: Header<T, unknown>) => (
			<TableStyled.Column key={header.id} isRowHeader>
				{header.isPlaceholder
					? null
					: flexRender(header.column.columnDef.header, header.getContext())}
			</TableStyled.Column>
		),
		[],
	);

	const renderHeaderGroup = useCallback(
		(headerGroup: HeaderGroup<T>) => (
			<TableStyled.Row key={headerGroup.id}>
				{headerGroup.headers.map(renderHeader)}
			</TableStyled.Row>
		),
		[renderHeader],
	);

	const renderCell = useCallback(
		(cell: Cell<T, unknown>) => (
			<TableStyled.Cell key={cell.id}>
				{flexRender(cell.column.columnDef.cell, cell.getContext())}
			</TableStyled.Cell>
		),
		[],
	);

	const renderRow = useCallback(
		(row: Row<T>) => (
			<TableStyled.Row key={row.id}>{row.getVisibleCells().map(renderCell)}</TableStyled.Row>
		),
		[renderCell],
	);

	return (
		<TableStyled.Container>
			<TableStyled.Table {...props}>
				<TableHeader>{source.getHeaderGroups().map(renderHeaderGroup)}</TableHeader>
				<TableBody>{source.getRowModel().rows.map(renderRow)}</TableBody>
			</TableStyled.Table>
		</TableStyled.Container>
	);
}
