import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-headerapikey';
import { AuthService } from '../auth.service';

@Injectable()
export class HeaderApiKeyStrategy extends PassportStrategy(
  Strategy,
  'api-key'
) {
  constructor(private readonly authService: AuthService) {
    super(
      { header: 'authorization', prefix: 'Bearer ' },
      true,
      async (
        apiKey: string,
        done: (error: Error, data: unknown) => Record<string, unknown>
      ) => this.validate(apiKey, done)
    );
  }

  async validate(
    apiKey: string,
    done: (error: Error, data: unknown) => Record<string, unknown>
  ) {
    const user = await this.authService.getUserWithMagicDIDToken(apiKey);
    return done(null, user);
  }
}
