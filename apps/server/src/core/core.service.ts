import { PrismaService } from 'model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  constructor(private readonly prisma: PrismaService) {}

  async getStatus() {
    return true;
  }
}
