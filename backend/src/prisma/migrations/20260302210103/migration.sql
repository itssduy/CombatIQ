-- CreateTable
CREATE TABLE "AthleteoOnOrganization" (
    "id" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,
    "organziationId" TEXT NOT NULL,

    CONSTRAINT "AthleteoOnOrganization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AthleteoOnOrganization" ADD CONSTRAINT "AthleteoOnOrganization_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AthleteoOnOrganization" ADD CONSTRAINT "AthleteoOnOrganization_organziationId_fkey" FOREIGN KEY ("organziationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
