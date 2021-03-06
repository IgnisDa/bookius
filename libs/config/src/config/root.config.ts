import { IsNotEmpty, IsString } from 'class-validator';

/**
 * The minimal configuration definition of the application. It defines the various
 * application level variables used, generally specified by environment variables.
 */
export class RootConfig {
  /** The connection string to the postgres database */
  @IsString()
  @IsNotEmpty()
  public readonly DATABASE_URL: string;

  /** The connection string to the redis key-value store */
  @IsString()
  @IsNotEmpty()
  public readonly REDIS_URL: string;
}
