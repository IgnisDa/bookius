-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('PENDING', 'STARTED', 'FAILED', 'SUCCESSFUL');

-- CreateTable
CREATE TABLE "JobLog" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "JobStatus" NOT NULL DEFAULT E'PENDING',
    "data" JSONB NOT NULL,
    "startedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedOn" TIMESTAMP(3),
    "errorLog" TEXT,
    "queueName" TEXT NOT NULL,

    CONSTRAINT "JobLog_pkey" PRIMARY KEY ("id")
);
