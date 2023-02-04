import { Inject, Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Users } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { Login } from './entities/login.entity';
import { sign } from 'jsonwebtoken';

@Injectable()
export class LoginService {
  constructor(
    @Inject('LOGIN_REPOSITORY')
    private loginRepository: Repository<Login>,
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
  ) {}

  async create(createLoginDto: CreateLoginDto): Promise<any> {
    try {
      const userLogin = this.loginRepository.create({
        email: createLoginDto.email,
        password: createLoginDto.password,
      });

      const userExists = await this.usersRepository.findOne({
        where: { email: userLogin.email },
      });

      if (!userExists) throw new Error('Usuário não cadastrado');

      const token = sign({}, 'f3e4f8cc-333e-463d-a5f4-c98fcee52318', {
        subject: String(userExists.id),
      });

      return { token };
    } catch (error) {
      throw new Error(error);
    }
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
