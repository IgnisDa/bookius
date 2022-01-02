-- CreateTable
CREATE TABLE "BookProgressLog" (
    "id" BIGSERIAL NOT NULL,
    "percentage" DECIMAL(5, 2) NOT NULL DEFAULT 0 CHECK (
        "percentage" >= 0
        AND "percentage" <= 100
    ),
    "bookId" BIGINT NOT NULL,
    "numPages" SMALLINT NOT NULL CHECK ("numPages" > 0),
    "userId" TEXT NOT NULL,
    "startedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "BookProgressLog_pkey" PRIMARY KEY ("id")
);
-- CreateIndex
CREATE UNIQUE INDEX "BookProgressLog_bookId_userId_key" ON "BookProgressLog"("bookId", "userId");
-- AddForeignKey
ALTER TABLE "BookProgressLog"
ADD CONSTRAINT "BookProgressLog_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "BookProgressLog"
ADD CONSTRAINT "BookProgressLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
