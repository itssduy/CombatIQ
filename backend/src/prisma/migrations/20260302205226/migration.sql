/*
  Warnings:

  - Added the required column `weightClassId` to the `Athlete` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Athlete" ADD COLUMN     "weightClassId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "weightClass" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "upper" INTEGER NOT NULL,
    "lower" INTEGER NOT NULL,

    CONSTRAINT "weightClass_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Athlete" ADD CONSTRAINT "Athlete_weightClassId_fkey" FOREIGN KEY ("weightClassId") REFERENCES "weightClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
