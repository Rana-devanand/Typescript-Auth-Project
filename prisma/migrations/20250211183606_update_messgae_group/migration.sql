-- DropForeignKey
ALTER TABLE `messages` DROP FOREIGN KEY `messages_groupId_fkey`;

-- DropIndex
DROP INDEX `messages_groupId_fkey` ON `messages`;

-- AlterTable
ALTER TABLE `messages` MODIFY `groupId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `messages` ADD CONSTRAINT `messages_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `groups`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
