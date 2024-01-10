import { CustomError } from "../CustomError";
import { NotAuthorizedError } from "../NotAuthorizedError";
import { NotFoundError } from "../NotFoundError";

describe("Given a Not Authorized Error", () => {
  describe("When it is instanced", () => {
    const actualNotFoundError = new NotFoundError();

    test("Then it should be an instance of CustomError", () => {
      expect(actualNotFoundError).toBeInstanceOf(CustomError);
    });

    test("Then it's message should be 'Not Found'", () => {
      const expectedErrorMessage = "Not Found";

      expect(actualNotFoundError).toHaveProperty(
        "message",
        expectedErrorMessage
      );
    });

    test("Then it's status code should be 404", () => {
      const expectedStatusCode = 404;

      expect(actualNotFoundError).toHaveProperty(
        "statusCode",
        expectedStatusCode
      );
    });
  });
});
