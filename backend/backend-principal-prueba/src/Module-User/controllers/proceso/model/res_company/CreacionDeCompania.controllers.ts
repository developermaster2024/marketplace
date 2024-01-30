import { Controller, Post, Body } from '@nestjs/common';
import { CreacionDeCompanyCreatedDto } from 'src/Module-User/dto/proceso/model/res_company/CreacionDeCompania.dto';
import { CreacionDeCompanyService } from 'src/Module-User/service/proceso/model/res_company/CreacionDeCompania.service';

@Controller('res_company/creacion_de_company')
export class CreacionDeCompanyController {
  constructor(private readonly companyService: CreacionDeCompanyService) {}

  @Post()
  async createCompany(@Body() datosCompany: CreacionDeCompanyCreatedDto) {
    return await this.companyService.createCompany(datosCompany);
  }
}
