-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "isbn10" DROP NOT NULL,
ALTER COLUMN "isbn10" SET DATA TYPE TEXT,
ALTER COLUMN "isbn13" DROP NOT NULL,
ALTER COLUMN "isbn13" SET DATA TYPE TEXT;
