import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from '@/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfigModule } from './sequelize-config/sequelize-config.module';
import { SequelizeConfigService } from '@/sequelize-config/sequelize-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [appConfig] }),
    SequelizeConfigModule,
    // SequelizeModule.forRoot({
    //   dialect: 'postgres',
    //   host: process.env.DB_HOST,
    //   port: parseInt(process.env.DB_PORT),
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_NAME,
    //   models: [],
    // }),
    SequelizeModule.forRootAsync({
      imports: [SequelizeConfigModule],
      useExisting: SequelizeConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
