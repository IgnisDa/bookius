import { PrismaService } from '@bookius/model';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserShelfInput } from './dto/create-user-shelf.dto';

@Injectable()
export class ShelvesService {
  constructor(private readonly prisma: PrismaService) {}

  async userShelves(currentUser: User) {
    const resp = await this.prisma.shelf.findMany({
      where: { userId: currentUser.id },
      include: { books: true, _count: true },
    });
    return resp;
  }

  async createUserShelf(currentUser: User, input: CreateUserShelfInput) {
    const resp = await this.prisma.shelf.create({
      data: { ...input, user: { connect: { id: currentUser.id } } },
    });
    return resp;
  }
}
