import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddCsvFieldToTransactionTable1587687188431
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'transactions',
      new TableColumn({
        name: 'csvimport',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('transactions', 'csvimport');
  }
}
