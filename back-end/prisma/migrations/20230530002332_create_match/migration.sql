/*
  Warnings:

  - Made the column `away_team` on table `Match` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `date` on the `Match` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Match" ALTER COLUMN "away_team" SET NOT NULL,
DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
