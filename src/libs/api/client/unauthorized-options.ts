import { AxiosRequestConfig } from 'axios';

export const apiClientUnauthorizedOptions = (): Partial<AxiosRequestConfig> => ({
	unautorized: true,
});
