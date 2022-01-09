-- CreateEnum
CREATE TYPE "ArchitectRole" AS ENUM ('AUTHOR', 'ILLUSTRATOR');

-- CreateTable
CREATE TABLE "Book" (
    "id" BIGSERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "isbn" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArchitectsOnBooks" (
    "bookId" BIGINT NOT NULL,
    "authorId" BIGINT NOT NULL,
    "role" "ArchitectRole" NOT NULL,

    CONSTRAINT "ArchitectsOnBooks_pkey" PRIMARY KEY ("bookId","authorId")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "openLibraryKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ArchitectsOnBooks_bookId_authorId_role_key" ON "ArchitectsOnBooks"("bookId", "authorId", "role");

-- AddForeignKey
ALTER TABLE "ArchitectsOnBooks" ADD CONSTRAINT "ArchitectsOnBooks_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArchitectsOnBooks" ADD CONSTRAINT "ArchitectsOnBooks_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
