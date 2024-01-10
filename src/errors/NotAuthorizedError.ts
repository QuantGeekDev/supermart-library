import { CustomError } from "./CustomError";

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    const errorMessage = "Not Authorized";
    super(errorMessage);

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serialiseErrors() {
    return [{ message: this.message }];
  }
}
