/*
  Warnings:

  - Added the required column `storeId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `StoreAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `StoreAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `StoreAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip` to the `StoreAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adress` to the `UserAddress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Favorite` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Plan` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `storeId` INTEGER NOT NULL,
    MODIFY `averageRating` DOUBLE NOT NULL DEFAULT 0.0;

-- AlterTable
ALTER TABLE `Store` MODIFY `averageRating` DOUBLE NOT NULL DEFAULT 0.0;

-- AlterTable
ALTER TABLE `StoreAddress` ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `street` VARCHAR(191) NOT NULL,
    ADD COLUMN `zip` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `UserAddress` ADD COLUMN `adress` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
