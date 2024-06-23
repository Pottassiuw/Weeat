/*
  Warnings:

  - You are about to drop the column `street` on the `StoreAddress` table. All the data in the column will be lost.
  - Added the required column `state` to the `StoreAddress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `StoreAddress` DROP COLUMN `street`,
    ADD COLUMN `state` VARCHAR(191) NOT NULL;
