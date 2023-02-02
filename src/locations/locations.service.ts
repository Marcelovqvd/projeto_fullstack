import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationsService {
  constructor(
    @Inject('LOCATIONS_REPOSITORY')
    private localtionsRepository: Repository<Location>,
  ) {}

  async create(createLocationDto: CreateLocationDto) {
    try {
      const newLocation = this.localtionsRepository.create({
        name: createLocationDto.name,
        cep: createLocationDto.cep,
        rua: createLocationDto.rua,
        numero: createLocationDto.numero,
        bairro: createLocationDto.bairro,
        cidade: createLocationDto.cidade,
        estado: createLocationDto.estado,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await this.localtionsRepository.save(newLocation);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    try {
      const locationsList = await this.localtionsRepository.find();
      return locationsList;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {
    try {
      const location = await this.localtionsRepository.findOneBy({ id });

      if (!location) throw new Error('Local não encontrado.');

      await this.localtionsRepository
        .createQueryBuilder()
        .update()
        .set({
          ...updateLocationDto,
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

  async remove(id: number) {
    try {
      const location = await this.localtionsRepository.findOneBy({ id });

      if (!location) throw new Error('Local não encontrado.');

      await this.localtionsRepository
        .createQueryBuilder()
        .delete()
        .from(Location)
        .where('id = :id', { id: 1 })
        .execute();

      await this.localtionsRepository.delete(location);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}
