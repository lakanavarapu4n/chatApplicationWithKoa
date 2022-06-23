import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

return knex.schema.createTable('messages', (table: Knex.TableBuilder) => {
    table.uuid('id').primary().notNullable().unique();
    table.string('roomdata').notNullable();
    table.string('room').notNullable();
    table.string('name').references('username').inTable('users').onUpdate('CASCADE').notNullable();
  })
  
}


export async function down(knex: Knex): Promise<void> {
}

