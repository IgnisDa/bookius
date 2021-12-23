import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DateTime } from 'luxon';
import { logger } from '../logger';

@Injectable()
export class BenchmarkInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = GqlExecutionContext.create(context);
    const info = ctx.getInfo();
    const typename = info.path.typename;
    const key = info.fieldName;
    const startedAt = DateTime.now();
    return next.handle().pipe(
      tap(() => {
        const diff = DateTime.now().diff(startedAt, 'milliseconds').toMillis();
        logger.info(`${typename} '${key}' took ${diff}ms`);
      })
    );
  }
}
