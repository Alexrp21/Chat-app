import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { RealIP } from 'nestjs-real-ip';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getIp')
  getIp(@RealIP() ip: object): object {
    return { ip: ip };
  }

  @Post('/registrate')
  registrateUser(@Req() req: Request): any {
    const result = this.appService.registrateUser(req.body);
    // res.send(result);
    return { result: result };
  }

  @Post('/login')
  loginUser(@Req() req: Request): any {
    const result = this.appService.loginUser(req.body);
    return { result: result };
  }
}
