import { SetStateAction, Dispatch } from 'react';
import { PaginationState } from '@tanstack/react-table';
import { PayoutInterface } from '@/libs/api/resource/payout/interface.interface';
import { ApiResourceTypesResponsePaginatedMetadataInterface } from '@/libs/api/resource/types';

export interface PayoutTableComponentPropsInterface {
	data?: PayoutInterface[];
	metadata?: ApiResourceTypesResponsePaginatedMetadataInterface;
	pagination: PaginationState;
	onPaginationChange: Dispatch<SetStateAction<PaginationState>>;
}
