import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { UnauthorizedUserException } from 'src/exceptions/unauthorized-user';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    if (request.user) {
      return true;
    } else {
      throw new UnauthorizedUserException();
    }
  }
}
