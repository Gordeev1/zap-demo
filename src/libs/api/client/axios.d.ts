import { AxiosRequestConfig as AxiosRequestConfigOrigin } from 'axios';
import { ApiVersionEnum } from '../version.enum';

declare module 'axios' {
	interface AxiosRequestConfig extends AxiosRequestConfigOrigin {
		unautorized?: boolean;
		apiVersion?: ApiVersionEnum;
	}
}
