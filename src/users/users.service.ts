import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    try {
      const newUser = this.usersRepository.create({
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await this.usersRepository.save(newUser);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(): Promise<Users[]> {
    try {
      const usersList = await this.usersRepository.find();
      return usersList;
    } catch (error) {}
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<Users> {
    try {
      const user = await this.usersRepository.findOneBy({ id });

      if (!user) throw new Error('User not found.');

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {
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

  async remove(id: number): Promise<void> {
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
  }
}
