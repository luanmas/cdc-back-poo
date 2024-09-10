import {
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { UserAlreadyHasEnterpriseException } from './exceptions/user-already-has-enterprise.exception';
import { UnexpectedErrorException } from './exceptions/unexpected-error.exception';
import { verifyPostgresErrorCode } from './common/utils/verify-postgres-error-codes';

@Catch(
  QueryFailedError,
  UserAlreadyHasEnterpriseException,
  UnexpectedErrorException,
)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = ['Internal server error'];

    if (exception instanceof QueryFailedError) {
      const { code, detail } = exception.driverError;
      const { message: postgresMessage, statusCode } = verifyPostgresErrorCode(
        code,
        detail,
      );
      status = statusCode || status;
      message = postgresMessage || message;
    } else if (
      exception instanceof UserAlreadyHasEnterpriseException ||
      exception instanceof UnexpectedErrorException
    ) {
      status = HttpStatus.BAD_REQUEST;
      message = [exception.message];
    }

    response.status(status).json({
      message,
      statusCode: status,
    });
  }
}
