import { PrismaService } from '@bookius/model';
import { Injectable } from '@nestjs/common';
import { ApplicationConfig } from '../config';

@Injectable()
export class CoreService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly applicationConfig: ApplicationConfig
  ) {}

  async getGitRev() {
    return this.applicationConfig.GIT_REV;
  }
}
