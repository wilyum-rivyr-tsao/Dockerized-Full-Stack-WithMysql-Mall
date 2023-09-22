import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
// import { UsersModule } from './users/users.module';
import { BooksModule } from './components/books/books.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        name: 'default',
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [
          __dirname + '/**/*.entity.ts',
          __dirname + '/**/*.entity.js',
        ],
        migrations: [
          __dirname + '/src/migrations/**/*.ts',
          __dirname + '/src/migrations/**/*.js',
        ],
        synchronize: false,
      }),
      // dataSource receives the configured DataSourceOptions
      // and returns a Promise<DataSource>.
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    BooksModule,
    // UsersModule,
  ],
})
export class AppModule {}
