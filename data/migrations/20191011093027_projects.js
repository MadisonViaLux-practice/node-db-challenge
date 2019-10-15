
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
            tbl.text('resource_name', 128)
                .unique()
                .notNullable();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.text('resource_description');
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
            tbl.text('task_description')
                .notNullable();
            tbl.text('task_notes');
            tbl.boolean('task_completed');

        })
};
  
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resource')
        .dropTableIfExists('task')
};