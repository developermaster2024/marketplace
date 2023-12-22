import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResPartnerNotFoundException } from './error/res_partner-not-found.exception';
import { ResPartner } from './entities/res-partner.entity';
import { UpdatedResPartnerDto } from './dto/updated-res-partner.dto';
import { Repository } from 'typeorm';
import { CreateResPartnerDto } from './dto/create-res-partner.dto';

@Injectable()
export class ResPartnerService {
  constructor(
    @InjectRepository(ResPartner)
    private readonly resPartnerRepository: Repository<ResPartner>,
  ) {}

  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResPartner[] | undefined> {
    const offset = (page - 1) * perPage;
    const resPartner = await this.resPartnerRepository
      .createQueryBuilder('resPartner')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resPartner;
  }

  async create(createResPartnerDto: CreateResPartnerDto): Promise<ResPartner> {
    const resPartner = new ResPartner(createResPartnerDto);
    return await this.resPartnerRepository.save(resPartner);
  }

  async findOneByEmail(email: string): Promise<ResPartner | undefined> {
    return await this.resPartnerRepository.findOne({ where: { email } });
  }

  async findOne(id: number): Promise<ResPartner> {
    const resPartner = await this.resPartnerRepository
      .createQueryBuilder('resPartner')
      .where('resPartner.id = :id', { id })
      .getOne();
    if (!resPartner) {
      throw new ResPartnerNotFoundException();
    }
    return resPartner;
  }

  async updated(
    id: number,
    updatedResPartnerDto: UpdatedResPartnerDto,
  ): Promise<ResPartner> {
    const resPartner = await this.resPartnerRepository
      .createQueryBuilder('resPartner')
      .where('resPartner.id = :id', { id })
      .getOne();
    if (!resPartner) {
      throw new ResPartnerNotFoundException();
    }
    Object.assign(resPartner, updatedResPartnerDto);
    return await this.resPartnerRepository.save(resPartner);
  }

  async deleted(id: number): Promise<void> {
    const resPartner = await this.resPartnerRepository
      .createQueryBuilder('resPartner')
      .where('resPartner.id = :id', { id })
      .getOne();
    if (!resPartner) {
      throw new ResPartnerNotFoundException();
    }
    await this.resPartnerRepository.softRemove(resPartner);
    console.log('users_partner Eliminado');
  }
}
