import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [UsersModule, DatabaseModule, CompaniesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
