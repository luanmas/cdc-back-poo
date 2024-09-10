import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guards';
import { Request, Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'Google Authentication' };
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect(@Res() res: Response) {
    res.redirect(process.env.FRONTEND_URL);
  }

  @Get('status')
  user(@Req() request: Request) {
    if (request.user)
      return {
        message: 'Authenticated',
        statusCode: '200',
        user: request.user,
      };
    else throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }

  @Get('logout')
  async logout(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    if (request.user) {
      response.cookie('connect.sid', '', { expires: new Date(Date.now()) });
      return {
        message: 'User logout',
        statusCode: '200',
      };
    } else throw new HttpException('No user logged', HttpStatus.NOT_FOUND);
  }
}
