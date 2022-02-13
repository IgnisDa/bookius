import { BenchmarkInterceptor, logger } from '@bookius/general';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import * as cors from 'fastify-cors';
import * as helmet from 'fastify-helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  app.useGlobalInterceptors(new BenchmarkInterceptor());
  const PORT = Number(process.env.PORT);
  app.getHttpAdapter().getInstance().register(helmet);
  app.getHttpAdapter().getInstance().register(cors);
  await app.listen(PORT, '0.0.0.0', () =>
    logger.silly(`Listening on port ${PORT}`)
  );
}

bootstrap();
