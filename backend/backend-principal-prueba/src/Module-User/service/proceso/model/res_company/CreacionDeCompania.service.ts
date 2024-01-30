// src/services/model/res_users/CreacionDeCompany.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreacionDeCompanyCreatedDto } from 'src/Module-User/dto/proceso/model/res_company/CreacionDeCompania.dto';
import { CreacionDeCompany } from 'src/Module-User/entities/proceso/model/res_company/CreacionDeCompania.entity';
import { Repository } from 'typeorm';

//Desarrollo del sercicio de la creacion de company

@Injectable()
export class CreacionDeCompanyService {
  constructor(
    @InjectRepository(CreacionDeCompany)
    private readonly companyRepository: Repository<CreacionDeCompanyCreatedDto>,
  ) {}
  async createCompany(
    datosCompany: CreacionDeCompanyCreatedDto,
  ): Promise<CreacionDeCompanyCreatedDto> {
    //Implementación de la creacion del campany
    const creacionDeCompany = new CreacionDeCompany(datosCompany);
    return await this.companyRepository.save(creacionDeCompany);
  }
}
