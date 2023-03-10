import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: '123',
        database: 'hublocal',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + './migrations/*.ts'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
