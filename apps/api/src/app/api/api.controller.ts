import { Controller, Get } from '@nestjs/common';
import { Message } from '@nx-demo/api-interfaces';

@Controller('api')
export class ApiController {
  @Get('hello')
  getData(): Message {
    return { message: 'hello world' };
  }

  @Get('news')
  getNews(): string[] {
    return ['aaaaaaaaaa', 'bbbbbbbbbb'];
  }
}
