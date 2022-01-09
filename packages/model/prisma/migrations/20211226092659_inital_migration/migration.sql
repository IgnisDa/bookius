/* CUSTOM COMMANDS */
CREATE EXTENSION IF NOT EXISTS "citext";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "issuer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" UUID NOT NULL,
    "userId" TEXT NOT NULL,
    "bio" TEXT,
    "age" SMALLINT,
    "username" CITEXT NOT NULL,
    "email" CITEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "countryId" INTEGER,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_issuer_key" ON "User"("issuer");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_username_key" ON "UserProfile"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_email_key" ON "UserProfile"("email");

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
