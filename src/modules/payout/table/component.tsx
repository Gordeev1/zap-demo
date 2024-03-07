import { FC, useMemo } from 'react';
import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { PayoutInterface } from '@/libs/api/resource/payout/interface.interface';
import { useLocalizationResources } from '@/libs/localization/resources.hook';
import { PaginationPageComponent } from '@/components/pagination/page/component';
import { PaginationSizeComponent } from '@/components/pagination/size/component';
import { TableComponent } from '@/components/table/component';
import { PayoutTableComponentPropsInterface } from './component-props.interface';

export const PayoutTableComponent: FC<PayoutTableComponentPropsInterface> = ({
	data = [],
	metadata,
	pagination,
	onPaginationChange,
}) => {
	const { t } = useLocalizationResources();

	const columns = useMemo<ColumnDef<PayoutInterface>[]>(
		() =>
			(
				['dateAndTime', 'status', 'value', 'username'] as const satisfies Array<
					keyof PayoutInterface
				>
			).map((key) => ({
				id: key,
				accessorKey: key,
				header: () => t(`payout.fields.${key}`),
				cell: (info) => info.cell.getValue(),
			})),
		[t],
	);

	const paginationEnabled = Boolean(metadata && metadata.totalCount > 0);

	const table = useReactTable({
		data,
		columns,
		pageCount: paginationEnabled ? undefined : data.length,
		rowCount: paginationEnabled ? metadata!.totalCount : undefined,
		state: { pagination: paginationEnabled ? pagination : undefined },
		onPaginationChange: paginationEnabled ? onPaginationChange : undefined,
		getCoreRowModel: getCoreRowModel(),
		manualPagination: true,
	});

	return (
		<>
			<TableComponent source={table} />
			{paginationEnabled ? (
				<>
					<PaginationPageComponent
						initialValue={pagination.pageIndex}
						onValueChange={table.setPageIndex}
						lastPage={Math.ceil(metadata!.totalCount / metadata!.limit)}
					/>
					<PaginationSizeComponent value={pagination.pageSize} onValueChange={table.setPageSize} />
				</>
			) : null}
		</>
	);
};
