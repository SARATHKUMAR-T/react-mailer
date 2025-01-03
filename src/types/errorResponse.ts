export interface IHttpError extends Error {
  statusCode: number;
  isError: boolean
}
