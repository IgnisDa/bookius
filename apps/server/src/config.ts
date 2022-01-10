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
   * URL endpoint of the google books API
   */
  @IsNotEmpty()
  @IsUrl()
  GOOGLE_BOOKS_API_URL: string;
}
