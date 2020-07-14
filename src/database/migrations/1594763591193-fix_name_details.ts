import {MigrationInterface, QueryRunner} from "typeorm";

export class fixNameDetails1594763591193 implements MigrationInterface {
    name = 'fixNameDetails1594763591193'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_9fc134ca20766e165ad650ee74` ON `users`");
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `name` `name` varchar(50) NULL");
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `lastname` `lastname` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `created_at` `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `updated_at` `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `lastname` `lastname` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `name` `name` varchar(50) NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_9fc134ca20766e165ad650ee74` ON `users` (`detail_id`)");
    }

}
