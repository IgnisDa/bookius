/*
  Warnings:

  - The primary key for the `BookImage` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "BookImage" DROP CONSTRAINT "BookImage_pkey",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
ADD CONSTRAINT "BookImage_pkey" PRIMARY KEY ("id");
