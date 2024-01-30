import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreacionDeUsuarioModule } from './Module-User/module/proceso/model/res_users/CreacionDeUsuario.module';
import { CreacionDeCompanyModule } from './Module-User/module/proceso/model/res_company/CreacionDeCompania.module';

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
      database: 'mark_principal',
      entities: ['dist/**/*.entity.js'],
      autoLoadEntities: true,
      synchronize: false,
      logging: false,
    }),
    CreacionDeUsuarioModule,
    CreacionDeCompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
