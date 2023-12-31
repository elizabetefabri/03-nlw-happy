import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrphanages1699054209004 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "orphanages",
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
          name: "name",
          type: "varchar",
          },
          {
          name: "latitude",
          type: "decimal",
          scale: 10, // Números depois da vírgula
          precision: 2, // Números antes da vírgula
          },
          {
          name: "longitude",
          type: "decimal",
          scale: 10, // Números depois da vírgula
          precision: 2, // Números antes da vírgula
          },
          {
          name: "about",
          type: "text",
          },
          {
          name: "instructions",
          type: "text",
          },
          {
          name: "opening_hours",
          type: "varchar",
          },
          {
          name: "open_on_weekends",
          type: "boolean",
          default: false,
          },
      ], 
    }));  
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
  }
}
