import { SetStateAction, Dispatch } from 'react';
import { PaginationState } from '@tanstack/react-table';
import { PayoutInterface } from '@/libs/api/resource/payout/interface.interface';
import { ApiResourceTypesResponsePaginatedMetadataInterface } from '@/libs/api/resource/types';
import { TableComponentPropsInterface } from '@/components/table/component-props.interface';

export interface PayoutTableComponentPropsInterface
	extends Omit<TableComponentPropsInterface<PayoutInterface>, 'source'> {
	data?: PayoutInterface[];
	metadata?: ApiResourceTypesResponsePaginatedMetadataInterface;
	pagination: PaginationState;
	onPaginationChange: Dispatch<SetStateAction<PaginationState>>;
}
