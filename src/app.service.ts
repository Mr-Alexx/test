import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('接收到请求！')
    return 'Hello World!';
  }
}
