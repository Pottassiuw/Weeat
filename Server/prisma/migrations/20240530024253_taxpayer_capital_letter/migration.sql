/*
  Warnings:

  - You are about to drop the column `TaxpayerRegistry` on the `Store` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[taxpayerRegistry]` on the table `Store` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `taxpayerRegistry` to the `Store` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Store_TaxpayerRegistry_key` ON `Store`;

-- AlterTable
ALTER TABLE `Store` DROP COLUMN `TaxpayerRegistry`,
    ADD COLUMN `taxpayerRegistry` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Store_taxpayerRegistry_key` ON `Store`(`taxpayerRegistry`);
