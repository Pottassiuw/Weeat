/*
  Warnings:

  - You are about to drop the column `Neighborhood` on the `StoreAddress` table. All the data in the column will be lost.
  - You are about to drop the column `taxpayerRegistry` on the `StoreAddress` table. All the data in the column will be lost.
  - You are about to drop the column `zip` on the `StoreAddress` table. All the data in the column will be lost.
  - Added the required column `neighborhood` to the `StoreAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `StoreAddress` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `StoreAddress_taxpayerRegistry_key` ON `StoreAddress`;

-- AlterTable
ALTER TABLE `StoreAddress` DROP COLUMN `Neighborhood`,
    DROP COLUMN `taxpayerRegistry`,
    DROP COLUMN `zip`,
    ADD COLUMN `neighborhood` VARCHAR(191) NOT NULL,
    ADD COLUMN `zipCode` VARCHAR(191) NOT NULL;
