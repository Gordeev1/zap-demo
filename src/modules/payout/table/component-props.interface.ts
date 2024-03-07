import { PayoutInterface } from '@/libs/api/resource/payout/interface.interface';
import { PaginationState } from '@tanstack/react-table';
import { ApiResourceTypesResponsePaginatedMetadataInterface } from '@/libs/api/resource/types';
import { SetStateAction, Dispatch } from 'react';

export interface PayoutTableComponentPropsInterface {
	data?: PayoutInterface[];
	metadata?: ApiResourceTypesResponsePaginatedMetadataInterface;
	pagination: PaginationState;
	onPaginationChange: Dispatch<SetStateAction<PaginationState>>;
}
