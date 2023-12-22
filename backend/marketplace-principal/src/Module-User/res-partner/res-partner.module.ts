import { Module } from '@nestjs/common';
import { ResPartnerController } from './res-partner.controller';
import { ResPartnerService } from './res-partner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResPartner } from './entities/res-partner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResPartner])],
  controllers: [ResPartnerController],
  providers: [ResPartnerService],
})
export class ResPartnerModule {}
