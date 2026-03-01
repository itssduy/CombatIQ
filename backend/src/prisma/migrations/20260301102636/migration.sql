-- CreateTable
CREATE TABLE "Social" (
    "id" TEXT NOT NULL,
    "social" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Social" ADD CONSTRAINT "Social_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
