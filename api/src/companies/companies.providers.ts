import { DataSource } from 'typeorm';
import { Companies } from './entities/company.entity';

export const companiesProviders = [
  {
    provide: 'COMPANIES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Companies),
    inject: ['DATA_SOURCE'],
  },
];
