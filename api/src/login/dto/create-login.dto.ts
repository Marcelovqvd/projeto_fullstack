import { IsEmail, IsString } from 'class-validator';
import { Login } from '../entities/login.entity';

export class CreateLoginDto extends Login {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
