import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1674594360518 implements MigrationInterface {
    name = 'NewMigration1674594360518'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`plan\` (\`id_plan\` int NOT NULL AUTO_INCREMENT, \`link\` varchar(255) NOT NULL, PRIMARY KEY (\`id_plan\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`testnuber\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`testnuber\``);
        await queryRunner.query(`DROP TABLE \`plan\``);
    }

}
