-- CreateEnum
CREATE TYPE "Role" AS ENUM ('GOD_USER', 'USER', 'SITE_ADMIN', 'COMMUNITY_ADMIN', 'MODERATOR');

-- CreateTable
CREATE TABLE "User" (
    "id" VARCHAR(22) NOT NULL DEFAULT nanoid(),
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "middle_name" TEXT,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" VARCHAR(22) NOT NULL DEFAULT nanoid(),
    "published" BOOLEAN DEFAULT false,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "author_id" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'public',
    "upvote" INTEGER NOT NULL DEFAULT 1,
    "downvote" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" VARCHAR(22) NOT NULL DEFAULT nanoid(),
    "description" TEXT,
    "type" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
