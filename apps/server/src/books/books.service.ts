import { PrismaService } from '@bookius/model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async books() {
    const resp = await this.prisma.book.findMany({
      include: { architects: { select: { role: true, author: true } } },
    });
    return resp;
  }
}
