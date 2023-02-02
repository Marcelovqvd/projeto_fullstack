import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { CompaniesModule } from './companies/companies.module';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [UsersModule, DatabaseModule, CompaniesModule, LocationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
