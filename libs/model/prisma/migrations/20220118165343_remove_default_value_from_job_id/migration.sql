/*
  Warnings:

  - The values [PENDING] on the enum `JobStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "JobStatus_new" AS ENUM ('STARTED', 'FAILED', 'SUCCESSFUL');
ALTER TABLE "JobLog" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "JobLog" ALTER COLUMN "status" TYPE "JobStatus_new" USING ("status"::text::"JobStatus_new");
ALTER TYPE "JobStatus" RENAME TO "JobStatus_old";
ALTER TYPE "JobStatus_new" RENAME TO "JobStatus";
DROP TYPE "JobStatus_old";
ALTER TABLE "JobLog" ALTER COLUMN "status" SET DEFAULT 'STARTED';
COMMIT;

-- AlterTable
ALTER TABLE "JobLog" ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "status" SET DEFAULT E'STARTED';
DROP SEQUENCE "JobLog_id_seq";
