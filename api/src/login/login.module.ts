import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { DatabaseModule } from 'src/database/database.module';
import { loginProviders } from './login.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [LoginController],
  providers: [...loginProviders, LoginService],
})
export class LoginModule {}
