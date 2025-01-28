import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/user.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './users/auth/roles.guard';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService , 
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
