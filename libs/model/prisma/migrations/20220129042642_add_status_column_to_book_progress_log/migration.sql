-- CreateEnum
CREATE TYPE "BookProgressStatus" AS ENUM (
  'STARTED',
  'INTO_IT',
  'HALFWAY_THROUGH',
  'ALMOST_COMPLETED',
  'COMPLETED'
);
-- DropIndex
DROP INDEX "BookProgressLog_bookId_userId_key";
-- AlterTable
ALTER TABLE "BookProgressLog"
ADD COLUMN "status" "BookProgressStatus" GENERATED ALWAYS AS (
    CASE
      WHEN "percentage" < 10 THEN 'STARTED'::"BookProgressStatus"
      WHEN "percentage" >= 10
      AND "percentage" < 50 THEN 'INTO_IT'::"BookProgressStatus"
      WHEN "percentage" >= 50
      AND "percentage" < 90 THEN 'HALFWAY_THROUGH'::"BookProgressStatus"
      WHEN "percentage" >= 90
      AND "percentage" < 100 THEN 'ALMOST_COMPLETED'::"BookProgressStatus"
      WHEN "percentage" = 100 THEN 'COMPLETED'::"BookProgressStatus"
    END
  ) STORED;
