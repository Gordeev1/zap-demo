import axios from 'axios';
import { config } from '@/libs/config';
import { ApiClientService } from './service';

export const apiClient = new ApiClientService(axios, config.API_URL);
