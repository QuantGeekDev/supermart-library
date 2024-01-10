import { JwtPayload } from "../constants/globals";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export class AuthenticationService {
  generateJsonWebToken = (payload: JwtPayload, jwtSecret: string) => {
    return jwt.sign(payload, jwtSecret);
  };

  hashPassword = (password: string) => {
    const saltRounds = 8;
    const hashedPassword = bcrypt.hash(password, saltRounds);
    return hashedPassword;
  };

  comparePassword = async (
    storedPassword: string,
    suppliedPassword: string
  ): Promise<boolean> => {
    const isSamePassword = await bcrypt.compare(
      storedPassword,
      suppliedPassword
    );
    return isSamePassword;
  };

  verifyJsonWebToken = (
    jsonWebToken: string,
    jwtSecret: string
  ): JwtPayload | string => {
    const payload = jwt.verify(jsonWebToken, jwtSecret);
    return payload as JwtPayload;
  };
}
