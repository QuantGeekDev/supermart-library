import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    const errorMessage = "Not Found";
    super(errorMessage);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serialiseErrors() {
    return [{ message: this.message }];
  }
}
