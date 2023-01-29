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
        password: '123456',
        database: 'postgres',
        entities: ['dist/**/*.entity.js'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
