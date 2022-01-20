import type { AxiosResponse } from 'axios';

export type SuccessResponse<T> = {
  data: T;
  status: string;
};

export type ServerResponse<T> = AxiosResponse<SuccessResponse<T>>;

export type GeneratorResponse<T> = Generator<
  Promise<ServerResponse<T>>,
  SuccessResponse<T>,
  ServerResponse<T>
>;
