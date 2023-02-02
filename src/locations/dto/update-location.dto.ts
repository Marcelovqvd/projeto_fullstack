import { PartialType } from '@nestjs/mapped-types';
import { ILocation } from '../interfaces/ILocationInterface';
import { CreateLocationDto } from './create-location.dto';

export class UpdateLocationDto extends PartialType(CreateLocationDto) {
  name: string;
  address: ILocation;
}
