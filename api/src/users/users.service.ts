import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    try {
      const userAlreadyExists = await this.usersRepository.findOne({
        where: { email: createUserDto.email },
      });

      if (createUserDto.email === userAlreadyExists.email) {
        throw new Error('User already existsssss');
      }

      const newUser = this.usersRepository.create({
        name: createUserDto.name,
        email: createUserDto.email,
        password: await bcrypt.hash(createUserDto.password, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      //console.log(userAlreadyExists.email);
      console.log(createUserDto.email);

      await this.usersRepository.save(newUser);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByEmail(email: string): Promise<Users | undefined> {
    const user = await this.usersRepository.findOneBy({ email });

    if (!user) throw new Error('Usuário não existente');

    return user;
  }

  async findAll(): Promise<Users[]> {
    try {
      const usersList = await this.usersRepository.find();
      return usersList;
    } catch (error) {}
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<Users> {
    try {
      const user = await this.usersRepository.findOneBy({ id });

      if (!user) throw new Error('User not found.');

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<void> {
    try {
      const user = await this.usersRepository.findOneBy({ id });

      if (!user) throw new Error('User not found.');

      await this.usersRepository
        .createQueryBuilder()
        .update()
        .set({
          ...updateUserDto,
          updatedAt: new Date(),
        })
        .where('id = :id', {
          id: id,
        })
        .execute();

      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const user = await this.usersRepository.findOneBy({ id });

      if (!user) throw new Error('User not found.');

      await this.usersRepository
        .createQueryBuilder()
        .delete()
        .from(Users)
        .where('id = :id', { id: 1 })
        .execute();

      await this.usersRepository.delete(user);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}
