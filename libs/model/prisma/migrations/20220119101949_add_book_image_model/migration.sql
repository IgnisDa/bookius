-- CreateTable
CREATE TABLE "BookImage" (
    "bookId" BIGINT NOT NULL,
    "coverUrl" TEXT NOT NULL,
    "base64String" TEXT NOT NULL,

    CONSTRAINT "BookImage_pkey" PRIMARY KEY ("bookId")
);

-- AddForeignKey
ALTER TABLE "BookImage" ADD CONSTRAINT "BookImage_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
