import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyHasEnterpriseException extends HttpException {
  constructor() {
    super('User already has an associated enterprise', HttpStatus.BAD_REQUEST);
  }
}
