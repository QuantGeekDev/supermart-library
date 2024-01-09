import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
  interface Req extends Request {
    session?: any;
    currentUser: any;
  }
}

export const currentUser =
  (jwtSecret: string) => (req: Req, res: Response, next: NextFunction) => {
    if (!req.session?.jsonWebToken) {
      return next();
    }
    try {
      const payload = jwt.verify(req.session.jsonWebToken, jwtSecret);
      req.currentUser = payload;
    } catch (error) {
      next(error);
    }
    next();
  };
