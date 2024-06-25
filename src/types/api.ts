export type ApiResponse<T> = T;

export type ApiError = {
  message: string;
  error: string;
  statusCode: number;
};

export type UninterceptedApiError = {
  message: string | Record<string, string[]>;
  error: string;
  statusCode: number;
};

export interface PaginatedApiResponse<T> {
  code: number;
  status: string;
  data: T;
  meta: {
    last_page: number;
    total: number;
  };
}
