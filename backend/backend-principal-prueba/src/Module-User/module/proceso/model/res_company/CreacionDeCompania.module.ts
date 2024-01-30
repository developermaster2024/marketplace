import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreacionDeCompanyController } from 'src/Module-User/controllers/proceso/model/res_company/CreacionDeCompania.controllers';
import { CreacionDeCompany } from 'src/Module-User/entities/proceso/model/res_company/CreacionDeCompania.entity';
import { CreacionDeCompanyService } from 'src/Module-User/service/proceso/model/res_company/CreacionDeCompania.service';

@Module({
  imports: [TypeOrmModule.forFeature([CreacionDeCompany])],
  controllers: [CreacionDeCompanyController],
  providers: [CreacionDeCompanyService],
})
export class CreacionDeCompanyModule {}
