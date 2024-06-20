/*
  Warnings:

  - You are about to drop the column `taxpayerRegistry` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `StoreAddress` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[taxpayerRegistry]` on the table `StoreAddress` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Neighborhood` to the `StoreAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `StoreAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `StoreAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taxpayerRegistry` to the `StoreAddress` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Store_taxpayerRegistry_key` ON `Store`;

-- AlterTable
ALTER TABLE `Store` DROP COLUMN `taxpayerRegistry`;

-- AlterTable
ALTER TABLE `StoreAddress` DROP COLUMN `state`,
    ADD COLUMN `Neighborhood` VARCHAR(191) NOT NULL,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `complement` VARCHAR(191) NULL,
    ADD COLUMN `number` INTEGER NOT NULL,
    ADD COLUMN `taxpayerRegistry` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `StoreAddress_taxpayerRegistry_key` ON `StoreAddress`(`taxpayerRegistry`);
