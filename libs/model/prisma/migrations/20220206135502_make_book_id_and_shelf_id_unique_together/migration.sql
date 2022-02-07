/*
  Warnings:

  - A unique constraint covering the columns `[bookId,shelfId]` on the table `BooksInShelves` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BooksInShelves_bookId_shelfId_key" ON "BooksInShelves"("bookId", "shelfId");
