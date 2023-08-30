import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloPost(): string {
    return '<h1>Hello World en post</h1>'
  }
}

