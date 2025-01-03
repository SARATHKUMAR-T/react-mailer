export interface IApiResponse<T> {
  isError: boolean;
  message?: string;
  data?: T;
}

export class APIresponse<T> implements IApiResponse<T> {
  constructor(
    public isError: boolean,
    public statusCode: number,
    public message?: string,
    public data?: T,
    public token?: string
  ) { }
}
