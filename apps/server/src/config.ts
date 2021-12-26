import { RootConfig } from '@bookius/config';
import { IsString } from 'class-validator';

/**
 * The configuration of this particular application. Some common configuration properties
 * are inherited from {@link RootConfig} class.
 */
export class ApplicationConfig extends RootConfig {
  /**
   * The application secret key from the magic dashboard
   */
  @IsString()
  MAGIC_SECRET_KEY: string;
}
