/*
  Warnings:

  - A unique constraint covering the columns `[openLibraryKey]` on the table `Author` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Author_openLibraryKey_key" ON "Author"("openLibraryKey");
