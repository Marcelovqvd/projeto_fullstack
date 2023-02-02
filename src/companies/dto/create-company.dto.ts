import {
  IsFQDN,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Companies } from '../entities/company.entity';

export class CreateCompanyDto extends Companies {
  @IsFQDN()
  website: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, {
    message: 'CNPJ inválido',
  })
  cnpj: string;

  @IsString()
  name: string;
}
