import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { DatabaseModule } from 'src/database/database.module';
import { locationsProviders } from './locations.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [LocationsController],
  providers: [...locationsProviders, LocationsService],
})
export class LocationsModule {}
