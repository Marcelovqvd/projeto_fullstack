import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { companiesProviders } from './companies.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CompaniesController],
  providers: [...companiesProviders, CompaniesService],
})
export class CompaniesModule {}
