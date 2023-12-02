import { Module } from '@nestjs/common';
import { SequelizeConfigService } from './sequelize-config.service';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from '@/config';

@Module({
  imports: [ConfigModule.forFeature(databaseConfig)],
  providers: [SequelizeConfigService],
  exports: [SequelizeConfigService],
})
export class SequelizeConfigModule {}
