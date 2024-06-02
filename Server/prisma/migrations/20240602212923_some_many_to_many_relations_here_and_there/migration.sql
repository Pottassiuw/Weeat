/*
  Warnings:

  - You are about to drop the column `storeId` on the `StoreAddress` table. All the data in the column will be lost.
  - You are about to drop the column `adress` on the `UserAddress` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserAddress` table. All the data in the column will be lost.
  - Added the required column `address` to the `UserAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `UserAddress` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `StoreAddress` DROP FOREIGN KEY `StoreAddress_storeId_fkey`;

-- DropForeignKey
ALTER TABLE `UserAddress` DROP FOREIGN KEY `UserAddress_userId_fkey`;

-- AlterTable
ALTER TABLE `StoreAddress` DROP COLUMN `storeId`;

-- AlterTable
ALTER TABLE `UserAddress` DROP COLUMN `adress`,
    DROP COLUMN `userId`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `StoreReview` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `storeId` INTEGER NOT NULL,
    `rating` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `StoreReview_userId_idx`(`userId`),
    INDEX `StoreReview_storeId_idx`(`storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductReview` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `rating` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `productId` INTEGER NOT NULL,

    INDEX `ProductReview_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserToUserAddress` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_UserToUserAddress_AB_unique`(`A`, `B`),
    INDEX `_UserToUserAddress_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_StoreToStoreAddress` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_StoreToStoreAddress_AB_unique`(`A`, `B`),
    INDEX `_StoreToStoreAddress_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductReview` ADD CONSTRAINT `ProductReview_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductReview` ADD CONSTRAINT `ProductReview_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserToUserAddress` ADD CONSTRAINT `_UserToUserAddress_A_fkey` FOREIGN KEY (`A`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserToUserAddress` ADD CONSTRAINT `_UserToUserAddress_B_fkey` FOREIGN KEY (`B`) REFERENCES `UserAddress`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_StoreToStoreAddress` ADD CONSTRAINT `_StoreToStoreAddress_A_fkey` FOREIGN KEY (`A`) REFERENCES `Store`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_StoreToStoreAddress` ADD CONSTRAINT `_StoreToStoreAddress_B_fkey` FOREIGN KEY (`B`) REFERENCES `StoreAddress`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
