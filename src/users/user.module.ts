
import { MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule{
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //   .apply(LoggerMiddleware)
  //   .forRoutes(UsersController)
  // }
}
