
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.text('name', 128)
                .unique()
                .notNullable();
            tbl.text('description');
            tbl.boolean('completed');
        })
        .createTable('resource', tbl => {
            tbl.increments();
            tbl.text('name', 128)
                .unique()
                .notNullable();
            tbl.text('description');
        })
        .createTable('task', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.text('description')
                .notNullable();
            tbl.text('notes');
            tbl.boolean('completed');
        })
};
  
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resource')
        .dropTableIfExists('task')
};