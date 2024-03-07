export interface ApiResourceTypesResponsePaginatedMetadataInterface {
	page: number;
	limit: number;
	totalCount: number;
}

export interface ApiResourceTypesRequestPaginatedParamsInterface
	extends Pick<ApiResourceTypesResponsePaginatedMetadataInterface, 'page' | 'limit'> {}

export interface ApiResourceTypesResponsePaginatedInterface<T> {
	metadata: ApiResourceTypesResponsePaginatedMetadataInterface;
	data: T[];
}
