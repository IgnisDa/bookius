import { Query, Resolver } from '@nestjs/graphql';
import { CoreService } from './core.service';

@Resolver()
export class CoreResolver {
  constructor(private readonly coreService: CoreService) {}

  @Query(() => Boolean, {
    description: 'Get status of the service.',
  })
  async getStatus() {
    return await this.coreService.getStatus();
  }
}
