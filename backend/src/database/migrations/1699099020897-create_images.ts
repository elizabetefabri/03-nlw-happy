import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1699099020897 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "images",
      columns: [
        {
          name: "id",
          type: "integer",
          unsigned: true, // Não pode ser negativo
          isPrimary: true, // Chave primária
          isGenerated: true, // Gerada automaticamente
          generationStrategy: "increment", // Auto increment
        },
        {
          name: "path",
          type: "varchar",
        },
        {
          name: "orphanage_id",
          type: "integer",
        },
      ],
      foreignKeys: [
        {
          name: "ImageOrphanage",
          columnNames: ["orphanage_id"],
          referencedTableName: "orphanages",
          referencedColumnNames: ["id"],
          onUpdate: "CASCADE", // Se o id do orfanato for alterado, altera em todas as imagens
          onDelete: "CASCADE", // Se o orfanato for deletado, deleta todas as imagens
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
