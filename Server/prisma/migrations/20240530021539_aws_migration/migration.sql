/*
  Warnings:

  - You are about to alter the column `type` on the `Plan` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Enum(EnumId(0))`.
  - You are about to drop the column `stars` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `Store_name` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `photo` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `stars` on the `Store` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[TaxpayerRegistry]` on the table `Store` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `storeId` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `averageRating` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TaxpayerRegistry` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `averageRating` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeName` to the `Store` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_email_key` ON `User`;

-- AlterTable
ALTER TABLE `Favorite` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `storeId` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Plan` MODIFY `type` ENUM('BASIC', 'REGULAR', 'ADVANCED') NOT NULL DEFAULT 'BASIC';

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `stars`,
    ADD COLUMN `averageRating` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `Store` DROP COLUMN `Store_name`,
    DROP COLUMN `address`,
    DROP COLUMN `photo`,
    DROP COLUMN `stars`,
    ADD COLUMN `TaxpayerRegistry` INTEGER NOT NULL,
    ADD COLUMN `averageRating` DOUBLE NOT NULL,
    ADD COLUMN `banner` VARCHAR(191) NULL,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `logo` VARCHAR(191) NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `storeName` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `UserAddress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StoreAddress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `storeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Favorite_userId_idx` ON `Favorite`(`userId`);

-- CreateIndex
CREATE INDEX `Favorite_storeId_idx` ON `Favorite`(`storeId`);

-- CreateIndex
CREATE INDEX `Plan_name_idx` ON `Plan`(`name`);

-- CreateIndex
CREATE INDEX `Product_name_idx` ON `Product`(`name`);

-- CreateIndex
CREATE INDEX `Product_price_idx` ON `Product`(`price`);

-- CreateIndex
CREATE UNIQUE INDEX `Store_TaxpayerRegistry_key` ON `Store`(`TaxpayerRegistry`);

-- CreateIndex
CREATE INDEX `Store_name_idx` ON `Store`(`name`);

-- CreateIndex
CREATE INDEX `Store_email_idx` ON `Store`(`email`);

-- CreateIndex
CREATE INDEX `Store_category_idx` ON `Store`(`category`);

-- CreateIndex
CREATE INDEX `User_email_idx` ON `User`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `User_name_email_key` ON `User`(`name`, `email`);

-- AddForeignKey
ALTER TABLE `UserAddress` ADD CONSTRAINT `UserAddress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorite` ADD CONSTRAINT `Favorite_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorite` ADD CONSTRAINT `Favorite_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StoreAddress` ADD CONSTRAINT `StoreAddress_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
