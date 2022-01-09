import { RootConfig } from 'general';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * The configuration of this particular application. Some common configuration properties
 * are inherited from {@link RootConfig} class.
 */
export class ApplicationConfig extends RootConfig {
  /**
   * The application secret key from the magic dashboard
   */
  @IsString()
  @IsNotEmpty()
  MAGIC_SECRET_KEY: string;
}
