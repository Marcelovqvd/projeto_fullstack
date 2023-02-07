import { Users } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { Login } from './entities/login.entity';

export const loginProviders = [
  {
    provide: 'LOGIN_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Login),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Users),
    inject: ['DATA_SOURCE'],
  },
];
