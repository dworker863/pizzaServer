import { AppService } from './app.service';
import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/users')
  getUsers() {
    return this.appService.getUsers();
  }
}
