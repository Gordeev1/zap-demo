import { AxiosStatic } from 'axios';
import { ApiVersionEnum } from '../version.enum';

export class ApiClientService {
	private client;

	get instance() {
		return this.client;
	}

	constructor(axios: AxiosStatic, apiUrl: string) {
		this.client = axios.create({ baseURL: apiUrl });

		this.client.interceptors.request.use((config) => {
			config.baseURL = [config.baseURL, config.apiVersion || ApiVersionEnum.v1].join('/');
			return config;
		});
	}
}
