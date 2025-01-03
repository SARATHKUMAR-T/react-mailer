import createHttpError from "http-errors";

export class BadRequestException {
  constructor(message = "Bad Request") {
    throw createHttpError(500, { message, isError: true });
  }
}

export class NotFoundException {
  constructor(message = "Not Found") {
    throw createHttpError(404, { message, isError: true });

  }
}

export class ReturnException {
  constructor(statusCode = 500, message = "Internal server error") {
    throw createHttpError(statusCode, { message, isError: true });
  }
}
