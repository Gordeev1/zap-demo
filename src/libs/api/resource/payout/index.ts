import { apiClient } from '@/libs/api/client';
import { apiResourcePayoutFactory } from './factory';

export const apiResourcePayout = apiResourcePayoutFactory(apiClient.instance);
