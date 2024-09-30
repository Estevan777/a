import { Injectable, Inject } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateImovelDto } from './dto/create-imovel.dto';
import { UpdateImovelDto } from './dto/update-imovel.dto';
import { Imovel } from './entities/imovel.entity';

@Injectable()
export class ImovelService {
  constructor(
    @Inject("DATA_SOURCE") private readonly database: DataSource,
  ) {}

  async findAll(): Promise<Imovel[]> {
    return await this.database.getRepository(Imovel).find();
  }

  async create(createImovelDto: CreateImovelDto) {
    return await this.database.getRepository(Imovel).save(createImovelDto)
  }

  async findOne(id: number): Promise<Imovel> {
    return await this.database.getRepository(Imovel).findOneBy({
      id: id
    });
  }

  async update(id: number, updateImovelDto: UpdateImovelDto) {
    return await this.database.getRepository(Imovel).update({id}, new UpdateImovelDto);
  }

  async remove(id: number) {
    return await this.database.getRepository(Imovel).delete({id: id})
  }
}