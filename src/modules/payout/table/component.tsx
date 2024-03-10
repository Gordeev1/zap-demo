import { FC, useMemo } from 'react';
import { format } from 'date-fns/format';
import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { PayoutInterface } from '@/libs/api/resource/payout/interface.interface';
import { useLocalizationResources } from '@/libs/localization/resources.hook';
import { PaginationPageComponent } from '@/components/pagination/page/component';
import { PaginationSizeComponent } from '@/components/pagination/size/component';
import { TableComponent } from '@/components/table/component';
import { TypographyComponent } from '@/components/typography/component';
import { PayoutStatusBadgeComponent } from '../status/badge/component';
import { PayoutTableComponentPropsInterface } from './component-props.interface';
import { PayoutTableStyled } from './styled';

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
				cell: (info) => {
					// TODO: enhance types
					const value = info.cell.getValue() as string;
					switch (info.column.id as keyof PayoutInterface) {
						case 'status':
							return <PayoutStatusBadgeComponent value={value} />;
						case 'dateAndTime':
							return (
								<TypographyComponent
									$font='main'
									$weight='bold'
									$size='md'
									$color='font-secondary'>
									{format(new Date(value), 'iii, MMM d, H:mm')}
								</TypographyComponent>
							);

						case 'value':
							return (
								<TypographyComponent
									$font='main'
									$weight='bold'
									$size='md'
									$color='font-main'>
									{value}
								</TypographyComponent>
							);
						case 'username':
						default:
							return (
								<TypographyComponent
									$font='main'
									$weight='bold'
									$size='md'
									$color='font-secondary'>
									{value}
								</TypographyComponent>
							);
					}
				},
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
				<PayoutTableStyled.PaginationContainer>
					<PaginationPageComponent
						initialValue={pagination.pageIndex}
						onValueChange={table.setPageIndex}
						lastPage={Math.ceil(metadata!.totalCount / metadata!.limit)}
					/>
					<PaginationSizeComponent
						value={pagination.pageSize}
						onValueChange={table.setPageSize}
					/>
				</PayoutTableStyled.PaginationContainer>
			) : null}
		</>
	);
};
