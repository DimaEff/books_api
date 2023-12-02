import databaseConfig from '@/config/database.config';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject(databaseConfig.KEY)
    private dbConfig: ConfigType<typeof databaseConfig>,
  ) {}

  getHello() {
    const dbPort = this.dbConfig.DB_PORT;
    const dbHost = this.dbConfig.DB_HOST;
    return { dbPort, dbHost };
  }
}
