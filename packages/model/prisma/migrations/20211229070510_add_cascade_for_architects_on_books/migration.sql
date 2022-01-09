-- DropForeignKey
ALTER TABLE "ArchitectsOnBooks" DROP CONSTRAINT "ArchitectsOnBooks_authorId_fkey";

-- DropForeignKey
ALTER TABLE "ArchitectsOnBooks" DROP CONSTRAINT "ArchitectsOnBooks_bookId_fkey";

-- AddForeignKey
ALTER TABLE "ArchitectsOnBooks" ADD CONSTRAINT "ArchitectsOnBooks_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArchitectsOnBooks" ADD CONSTRAINT "ArchitectsOnBooks_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;
