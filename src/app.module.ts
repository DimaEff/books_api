import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from '@/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfigModule } from './sequelize-config/sequelize-config.module';
import { SequelizeConfigService } from '@/sequelize-config/sequelize-config.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [appConfig] }),
    SequelizeConfigModule,
    SequelizeModule.forRootAsync({
      imports: [SequelizeConfigModule],
      useExisting: SequelizeConfigService,
    }),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
