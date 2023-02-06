import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { CompaniesModule } from './companies/companies.module';
import { LocationsModule } from './locations/locations.module';
import { LoginModule } from './login/login.module';
import { ApiTokenCheckMiddleware } from './common/middleware/apiTokenCheckMiddleware';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    CompaniesModule,
    LocationsModule,
    LoginModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiTokenCheckMiddleware)
      .exclude(
        { path: 'users', method: RequestMethod.POST },
        { path: 'users/create', method: RequestMethod.POST },
        { path: 'login', method: RequestMethod.ALL },
      )
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
