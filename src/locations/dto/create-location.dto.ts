import { IsString } from 'class-validator';
import { Location } from '../entities/location.entity';
import { ILocation } from '../interfaces/ILocationInterface';

export class CreateLocationDto extends Location {
  @IsString()
  address: ILocation;

  @IsString()
  name: string;
}
