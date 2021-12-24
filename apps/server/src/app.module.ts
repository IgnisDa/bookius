import { PrismaModule } from '@bookius/model';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { ConnectionStringParser } from 'connection-string-parser';
import { dotenvLoader, TypedConfigModule } from 'nest-typed-config';
import { join } from 'path';
import { ApplicationConfig } from './config';
import { CoreModule } from './core/core.module';

const IS_PRODUCTION = process.env.NODE_ENV !== 'production';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BullModule.forRootAsync({
      imports: [ApplicationConfig],
      useFactory: async (configService: ApplicationConfig) => {
        const connectionObject = new ConnectionStringParser({
          scheme: 'redis',
          hosts: [],
        }).parse(configService.REDIS_URL);
        const connDetails = connectionObject.hosts[0];
        return {
          redis: {
            username: connectionObject.username,
            password: connectionObject.password,
            host: connDetails.host,
            port: connDetails.port,
          },
        };
      },
      inject: [ApplicationConfig],
    }),
    TypedConfigModule.forRoot({
      schema: ApplicationConfig,
      load: dotenvLoader(),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(__dirname, 'src', 'schema.graphql'),
      playground: IS_PRODUCTION,
      introspection: IS_PRODUCTION,
      sortSchema: true,
    }),
    PrismaModule,
    CoreModule,
  ],
})
export class AppModule {}
