import { ApplicationConfig } from '@bookius/config';
import { PrismaService } from '@bookius/model';
import { Magic } from '@magic-sdk/admin';
import { Injectable } from '@nestjs/common';
import { names, uniqueNamesGenerator } from 'unique-names-generator';

@Injectable()
export class AuthService {
  constructor(
    private readonly applicationConfig: ApplicationConfig,
    private readonly prisma: PrismaService
  ) {}

  private async getMagicTokenMetadata(issuer: string) {
    const secretKey: string = this.applicationConfig.MAGIC_SECRET_KEY;
    const mAdmin = new Magic(secretKey);
    try {
      const metadata = await mAdmin.users.getMetadataByIssuer(issuer);
      return metadata;
    } catch ($e) {
      return null;
    }
  }

  async getUserWithMagicDIDToken(DIDToken: string) {
    const secretKey: string = this.applicationConfig.MAGIC_SECRET_KEY;
    const mAdmin = new Magic(secretKey);
    try {
      const metadata = await mAdmin.users.getMetadataByToken(DIDToken);
      const user = await this.prisma.user.findUnique({
        where: { issuer: metadata.issuer },
      });
      return user;
    } catch ($e) {
      return null;
    }
  }

  async checkUserByIssuer(issuer: string) {
    return !!(await this.prisma.user.findUnique({ where: { issuer } }));
  }

  async createUser(issuer: string) {
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
    const metadata = await this.getMagicTokenMetadata(issuer);
    if (!metadata)
      return Promise.reject({ message: 'Received an incorrect magic token' });
    try {
      return await this.prisma.user.create({
        data: {
          issuer: metadata.issuer,
          profile: { create: { username: username, email: metadata.email } },
        },
      });
    } catch {
      return Promise.reject({
        message: 'This user already exists in the database',
      });
    }
  }

  async loginUser(issuer: string) {
    const metadata = await this.getMagicTokenMetadata(issuer);
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
