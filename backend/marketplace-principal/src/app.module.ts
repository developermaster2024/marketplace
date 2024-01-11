import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { ResGroupsModule } from './Module-User/res-groups/res-groups.module';
import { ResPartnerModule } from './Module-User/res-partner/res-partner.module';
import { ResCompanyModule } from './Module-User/res-company/res-company.module';
import { ResUsersModule } from './Module-User/res-users/res-users.module';
import { ResCountryStateModule } from './Module-User/res-country-state/res-country-state.module';
import { ResUsersLogModule } from './Module-User/res-users-log/res-users-log.module';
import { ResBankModule } from './Module-User/res-bank/res-bank.module';
import { ResCurrencyRateModule } from './Module-User/res-currency-rate/res-currency-rate.module';
import { ResUsersDeletionModule } from './Module-User/res-users-deletion/res-users-deletion.module';
import { ResCurrencyModule } from './Module-User/res-currency/res-currency.module';
import { ResCountryModule } from './Module-User/res-country/res-country.module';
import { IrModelAccessModule } from './Module-User/ir-model-access/ir-model-access.module';
import { IrModelAccessGroupsRelModule } from './Module-User/ir-model-access-groups-rel/ir-model-access-groups-rel.module';
import { IrRuleModule } from './Module-User/ir-rule/ir-rule.module';
import { ResGroupsImpliedIdsModule } from './Module-User/res-groups-implied-ids/res-groups-implied-ids.module';
import { ResGroupsRulesModule } from './Module-User/res-groups-rules/res-groups-rules.module';
import { ResUsersSettingsVolumesModule } from './Module-User/res-users-settings-volumens/res-users-settings-volumens.module';
import { AuthModule } from './Module-User/auth.module';
// import { AuthModule } from './Module-User/Functionalities/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'base_datos_quimica',
      entities: ['dist/**/*.entity.js'],
      autoLoadEntities: true,
      synchronize: false,
      logging: false,
    }),
    ResGroupsModule,
    ResPartnerModule,
    ResCompanyModule,
    ResUsersModule,
    ResCountryStateModule,
    ResUsersLogModule,
    ResBankModule,
    ResCurrencyRateModule,
    ResUsersDeletionModule,
    ResCountryModule,
    ResCurrencyModule,
    IrModelAccessModule,
    IrModelAccessGroupsRelModule,
    IrRuleModule,
    ResGroupsImpliedIdsModule,
    ResGroupsRulesModule,
    ResUsersSettingsVolumesModule,
    ResUsersLogModule,
    // AuthModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
