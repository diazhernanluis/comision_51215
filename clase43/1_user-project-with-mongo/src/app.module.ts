import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import FirstMiddleware from "./middleware/FirstMiddleware";

@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://coderhouse:coderhouse@ejercicios.t0qmdog.mongodb.net/codereats') ,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(FirstMiddleware).forRoutes({path: '*', method: RequestMethod.ALL});
  }
}
