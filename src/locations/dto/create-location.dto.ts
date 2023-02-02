import { IsNumber, IsString } from 'class-validator';
import { Location } from '../entities/location.entity';

export class CreateLocationDto extends Location {
  @IsString()
  name: string;

  @IsString()
  cep: string;

  @IsString()
  rua: string;

  @IsNumber()
  numero: number;

  @IsString()
  bairro: string;

  @IsString()
  cidade: string;

  @IsString()
  estado: string;
}
