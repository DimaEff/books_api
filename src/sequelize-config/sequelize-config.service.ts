import { Book } from '@/books/models/book.model';
import { databaseConfig } from '@/config';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(
    @Inject(databaseConfig.KEY)
    private readonly dbConfig: ConfigType<typeof databaseConfig>,
  ) {}

  createSequelizeOptions = ():
    | SequelizeModuleOptions
    | Promise<SequelizeModuleOptions> => ({
    dialect: 'postgres',
    host: this.dbConfig.DB_HOST,
    port: this.dbConfig.DB_PORT,
    username: this.dbConfig.DB_USERNAME,
    password: this.dbConfig.DB_PASSWORD,
    database: this.dbConfig.DB_NAME,
    autoLoadModels: true,
    synchronize: true,
    models: [Book],
  });
}
