import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResUsersSettingsVolumes } from './entities/res-users-settings-volumens.entity';
import { ResUsersSettingsVolumesController } from './res-users-settings-volumens.controller';
import { ResUsersSettingsVolumesService } from './res-users-settings-volumens.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResUsersSettingsVolumes])],
  controllers: [ResUsersSettingsVolumesController],
  providers: [ResUsersSettingsVolumesService],
})
export class ResUsersSettingsVolumesModule {}
