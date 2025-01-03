import { NextFunction, Request, Response } from "express";
import { IHttpError } from "../types";

export function globalErrorHandler(
  error: IHttpError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  return res
    .status(error.statusCode)
    .json({ statusCode: error.statusCode, message: error.message, isError: error.isError });
}
