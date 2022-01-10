import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { logger } from '@bookius/general';

@Injectable()
export class BenchmarkInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const startedAt = DateTime.now();
    const contextType = context.getType();
    if ((contextType as any) === 'graphql') {
      const ctx = GqlExecutionContext.create(context);
      const info = ctx.getInfo();
      const typename = info.path.typename.toUpperCase();
      const key = info.fieldName;
      return next.handle().pipe(
        tap(() => {
          const diff = DateTime.now()
            .diff(startedAt, 'milliseconds')
            .toMillis();
          logger.info(`GRAPHQL: ${typename} '${key}' took ${diff}ms`);
        })
      );
    }
    const http = context.switchToHttp();
    const req = http.getRequest();
    return next.handle().pipe(
      tap(() => {
        const diff = DateTime.now().diff(startedAt, 'milliseconds').toMillis();
        logger.info(`HTTP: ${req.method} '${req.url}' took ${diff}ms`);
      })
    );
  }
}
