import { PrismaService } from '@bookius/model';
import { Magic } from '@magic-sdk/admin';
import { Injectable } from '@nestjs/common';
import { ApplicationConfig } from '../config';
import { CreateUserError } from './dto/create-user.result';
import { names, uniqueNamesGenerator } from 'unique-names-generator';

@Injectable()
export class AuthService {
  constructor(
    private readonly applicationConfig: ApplicationConfig,
    private readonly prisma: PrismaService
  ) {}

  private async getMagicTokenMetadata(DIDToken: string) {
    const secretKey: string = this.applicationConfig.MAGIC_SECRET_KEY;
    const mAdmin = new Magic(secretKey);
    try {
      const issuer = mAdmin.token.getIssuer(DIDToken);
      const metadata = await mAdmin.users.getMetadataByIssuer(issuer);
      return metadata;
    } catch ($e) {
      return null;
    }
  }

  async getUserWithMagicDidToken(DIDToken: string) {
    const metadata = await this.getMagicTokenMetadata(DIDToken);
    if (!metadata) return null;
    const user = await this.prisma.user.findUnique({
      where: { issuer: metadata.issuer },
    });
    return user;
  }

  async createUser(DIDToken: string) {
    const errors = new CreateUserError();
    if (await this.getUserWithMagicDidToken(DIDToken)) {
      errors.userExists = true;
      errors.message = 'A user with this token already exists in the database';
      return Promise.reject(errors);
    }
    let username: string;
    // create a random username for the user
    while (true) {
      const randomUsername = uniqueNamesGenerator({ dictionaries: [names] });
      const userProfile = await this.prisma.userProfile.findMany({
        where: { username: randomUsername },
      });
      if (userProfile.length === 0) {
        username = randomUsername;
        break;
      }
    }
    const metadata = await this.getMagicTokenMetadata(DIDToken);
    if (!metadata)
      return Promise.reject({ message: 'Received an incorrect magic token' });
    const user = await this.prisma.user.create({
      data: {
        issuer: metadata.issuer,
        profile: { create: { username: username, email: metadata.email } },
      },
    });
    return user;
  }

  async loginUser(DIDToken: string) {
    const metadata = await this.getMagicTokenMetadata(DIDToken);
    if (!metadata)
      return Promise.reject({ message: 'Received an incorrect magic token' });
    const user = await this.prisma.user.findUnique({
      where: { issuer: metadata.issuer },
    });
    if (!user)
      return Promise.reject({
        message: 'A user associated with this token does not exist',
      });
    return { status: true, user: user };
  }
}
