/*
  Warnings:

  - You are about to drop the `_BookToShelf` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BookToShelf" DROP CONSTRAINT "_BookToShelf_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToShelf" DROP CONSTRAINT "_BookToShelf_B_fkey";

-- DropTable
DROP TABLE "_BookToShelf";

-- CreateTable
CREATE TABLE "BooksInShelves" (
    "id" BIGSERIAL NOT NULL,
    "bookId" BIGINT NOT NULL,
    "shelfId" TEXT NOT NULL,

    CONSTRAINT "BooksInShelves_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BooksInShelves" ADD CONSTRAINT "BooksInShelves_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BooksInShelves" ADD CONSTRAINT "BooksInShelves_shelfId_fkey" FOREIGN KEY ("shelfId") REFERENCES "Shelf"("id") ON DELETE CASCADE ON UPDATE CASCADE;
