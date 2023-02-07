import { NestMiddleware } from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export class ApiTokenCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken) {
      return res.status(401).json({
        message: 'Token is missing',
      });
    }

    const [, token] = authToken.split(' ');

    try {
      verify(token, 'f3e4f8cc-333e-463d-a5f4-c98fcee52318');

      return next();
    } catch (error) {
      return res.status(401).json({
        message: 'Invalid token',
      });
    }
    next();
  }
}
