import { BenchmarkInterceptor } from '@bookius/general';
import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new BenchmarkInterceptor());
  const port = process.env.PORT || 8000;
  app.use(helmet());
  await app.listen(port);
}

bootstrap();
