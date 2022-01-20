import { ApplicationConfig } from '@bookius/config';
import { PrismaService } from '@bookius/model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly applicationConfig: ApplicationConfig
  ) {}

  async getGitRev() {
    return { GIT_REV: this.applicationConfig.GIT_REV };
  }
}
