-- Change type preserving values
ALTER TABLE "Book"
ALTER COLUMN "openLibraryKey" TYPE TEXT [] USING array ["openLibraryKey"];
-- Rename the column
ALTER TABLE "Book"
  RENAME COLUMN "openLibraryKey" TO "openLibraryKeys";
-- AlterTable
ALTER TABLE "BookProgressLog"
ALTER COLUMN "status"
SET NOT NULL;
