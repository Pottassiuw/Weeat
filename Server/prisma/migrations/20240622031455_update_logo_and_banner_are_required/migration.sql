/*
  Warnings:

  - Made the column `banner` on table `Store` required. This step will fail if there are existing NULL values in that column.
  - Made the column `logo` on table `Store` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Store` MODIFY `banner` VARCHAR(191) NOT NULL,
    MODIFY `logo` VARCHAR(191) NOT NULL;
