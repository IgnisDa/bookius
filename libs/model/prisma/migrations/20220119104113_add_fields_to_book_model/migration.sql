/*
  Warnings:

  - You are about to drop the column `isbn` on the `Book` table. All the data in the column will be lost.
  - Added the required column `openLibraryKey` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "isbn",
ADD COLUMN     "isbn10" TEXT[],
ADD COLUMN     "isbn13" TEXT[],
ADD COLUMN     "openLibraryKey" TEXT NOT NULL;
