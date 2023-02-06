import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Companies } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @Inject('COMPANIES_REPOSITORY')
    private companiesRepository: Repository<Companies>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    try {
      const newCompany = this.companiesRepository.create({
        name: createCompanyDto.name,
        website: createCompanyDto.website,
        cnpj: createCompanyDto.cnpj,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await this.companiesRepository.save(newCompany);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    try {
      const companiesList = await this.companiesRepository.find();
      return companiesList;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    try {
      const company = await this.companiesRepository.findOneBy({ id });

      if (!company) throw new Error('Empresa não encontrada.');

      await this.companiesRepository
        .createQueryBuilder()
        .update()
        .set({
          ...updateCompanyDto,
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
      const company = await this.companiesRepository.findOneBy({ id });

      if (!company) throw new Error('Empresa não encontrada.');

      await this.companiesRepository
        .createQueryBuilder()
        .delete()
        .from(Companies)
        .where('id = :id', { id: 1 })
        .execute();

      await this.companiesRepository.delete(company);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}
