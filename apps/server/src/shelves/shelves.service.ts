import { ListFilterArgs } from '@bookius/general';
import { PrismaService } from '@bookius/model';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserShelfInput } from './dto/create-user-shelf.dto';

@Injectable()
export class ShelvesService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserShelves(currentUser: User, args: ListFilterArgs) {
    const resp = await this.prisma.shelf.findMany({
      take: args.take,
      orderBy: { updatedAt: 'desc' },
      where: { userId: currentUser.id },
      include: { booksInThisShelf: { select: { book: true } }, _count: true },
    });
    return resp;
  }

  async createUserShelf(currentUser: User, input: CreateUserShelfInput) {
    const resp = await this.prisma.shelf.create({
      data: { ...input, user: { connect: { id: currentUser.id } } },
    });
    return resp;
  }

  async addBookToShelf(currentUser: User, bookId: bigint, shelfId: string) {
    const { userId } = await this.prisma.shelf.findUnique({
      where: { id: shelfId },
      select: { userId: true },
    });
    if (userId !== currentUser.id)
      return Promise.reject({
        message: 'This shelf does not belong to this user',
      });
    try {
      await this.prisma.booksInShelves.create({
        data: { bookId: bookId, shelfId: shelfId },
      });
    } catch {
      return Promise.reject({
        message: 'This book has already been added to this shelf',
      });
    }
  }

  async removeBookFromShelf(
    currentUser: User,
    bookId: bigint,
    shelfId: string
  ) {
    const { userId } = await this.prisma.shelf.findUnique({
      where: { id: shelfId },
      select: { userId: true },
    });
    if (userId !== currentUser.id)
      return Promise.reject({
        message: 'This shelf does not belong to this user',
      });
    try {
      const { id } = await this.prisma.booksInShelves.findFirst({
        where: { bookId: bookId, shelfId: shelfId },
      });
      await this.prisma.booksInShelves.delete({ where: { id: id } });
    } catch {
      return Promise.reject({
        message: 'This book has not been added to this shelf yet',
      });
    }
  }
}
