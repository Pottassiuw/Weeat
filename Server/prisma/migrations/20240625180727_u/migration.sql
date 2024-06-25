/*
  Warnings:

  - Added the required column `commercialNumber` to the `Store` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Store` ADD COLUMN `commercialNumber` VARCHAR(191) NOT NULL;
