import { BenchmarkInterceptor, logger } from '@bookius/general';
import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new BenchmarkInterceptor());
  const PORT = Number(process.env.PORT) || 8000;
  app.use(helmet());
  await app.listen(PORT, () => logger.silly(`Listening on port ${PORT}`));
}

bootstrap();
