import { Body, Controller, Get, Post, Put  } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('crawl')
  crawlData(@Body() data) {
    console.log('我草了，为什么接收不到')
    console.log('crawl: ', data)
    return 'dd'
  }

  @Put('test')
  test(@Body() data) {
    console.log('put')
    return ''
  }
}
