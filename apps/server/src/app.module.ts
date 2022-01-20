import { ApplicationConfig } from '@bookius/config';
import { PrismaModule } from '@bookius/model';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { dotenvLoader, TypedConfigModule } from 'nest-typed-config';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { CoreModule } from './core/core.module';
import { ShelvesModule } from './shelves/shelves.module';

const IS_PRODUCTION = process.env.NODE_ENV !== 'production';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BullModule.forRootAsync({
      useFactory: async (configService: ApplicationConfig) => {
        const connection = new URL(configService.REDIS_URL);
        return {
          redis: {
            username: connection.username,
            password: connection.password,
            host: connection.hostname,
            port: Number(connection.port),
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
      autoSchemaFile: join(
        process.cwd(),
        'libs',
        'generated',
        'src',
        'schema.graphql'
      ),
      playground: IS_PRODUCTION,
      introspection: IS_PRODUCTION,
      sortSchema: true,
    }),
    PrismaModule,
    CoreModule,
    AuthModule,
    BooksModule,
    ShelvesModule,
  ],
})
export class AppModule {}
