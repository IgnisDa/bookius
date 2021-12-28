import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PassportModule } from '@nestjs/passport';
import { HeaderApiKeyStrategy } from './strategies/header-api-key.strategy';

@Module({
  imports: [PassportModule],
  providers: [AuthResolver, AuthService, HeaderApiKeyStrategy],
})
export class AuthModule {}
