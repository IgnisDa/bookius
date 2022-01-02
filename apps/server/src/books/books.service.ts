import { PrismaService } from '@bookius/model';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { sampleSize } from 'lodash';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async books() {
    const resp = await this.prisma.book.findMany({
      include: { architects: { select: { role: true, author: true } } },
    });
    return resp;
  }

  async userRelatedBooks(currentUser: User) {
    // TODO: Use the `currentUser` to determine some books
    const resp = await this.prisma.book.findMany({
      include: { architects: { select: { role: true, author: true } } },
      take: 10,
    });
    return sampleSize(resp, 5);
  }

  async userRelatedAuthors(currentUser: User) {
    // TODO: Use the `currentUser` to determine some books
    const resp = await this.prisma.author.findMany({ take: 10 });
    return sampleSize(resp, 5);
  }

  async userBookProgressLogs(currentUser: User, take: number) {
    const resp = await this.prisma.bookProgressLog.findMany({
      take: take,
      include: {
        book: { include: { architects: { include: { author: true } } } },
      },
    });
    return resp;
  }
}
