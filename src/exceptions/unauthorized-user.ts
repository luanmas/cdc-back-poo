import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedUserException extends HttpException {
  constructor() {
    super('Usuário não autenticado', HttpStatus.UNAUTHORIZED);
  }
}
