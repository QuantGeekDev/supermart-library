import { NotAuthorizedError } from "../NotAuthorizedError";

describe("Given a Not Authorized Error", () => {
  describe("When it is instanced", () => {
    const actualNotAuthorizedError = new NotAuthorizedError();

    test("Then it's message should be 'Not Authorized'", () => {
      const expectedErrorMessage = "Not Authorized";

      expect(actualNotAuthorizedError).toHaveProperty(
        "message",
        expectedErrorMessage
      );
    });

    test("Then it's status code should be 401", () => {
      const expectedStatusCode = 401;

      expect(actualNotAuthorizedError).toHaveProperty(
        "statusCode",
        expectedStatusCode
      );
    });
  });
});
