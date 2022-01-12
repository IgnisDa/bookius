import { RootConfig } from '@bookius/config';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

/**
 * The configuration of this particular application. Some common configuration properties
 * are inherited from {@link RootConfig} class.
 */
export class ApplicationConfig extends RootConfig {
  /**
   * The application secret key from the magic dashboard
   */
  @IsNotEmpty()
  @IsString()
  MAGIC_SECRET_KEY: string;

  /**
   * URL endpoint of the open Library API
   */
  @IsNotEmpty()
  @IsUrl()
  OPEN_LIBRARY_API_URL = 'https://openlibrary.org';

  /**
   * The git revision that deployed this application
   */
  @IsNotEmpty()
  @IsString()
  GIT_REV: string;
}
