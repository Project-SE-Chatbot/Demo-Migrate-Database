import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1674593287158 implements MigrationInterface {
    name = 'NewMigration1674593287158'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`plan\` (\`id_plan\` int NOT NULL AUTO_INCREMENT, \`link\` varchar(255) NOT NULL, PRIMARY KEY (\`id_plan\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`plan\``);
    }

}
