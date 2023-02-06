import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationDto } from './create-location.dto';

export class UpdateLocationDto extends PartialType(CreateLocationDto) {
  name: string;
  cep: string;
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
}
