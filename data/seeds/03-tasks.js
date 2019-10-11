
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: 'Volts description of what needs to be done.', 
        notes: 'This can be whatever you want to put here...', 
        completed: false,
        project_id: 1
      },

        {description: 'Modded description of what needs to be done.', 
        notes: 'This can be whatever you want to put here...', 
        completed: false,
        project_id: 2
      },

        {description: 'Vanilla description of what needs to be done.', 
        notes: 'This can be whatever you want to put here...', 
        completed: false,
        project_id: 3
      }
      ]);
    });
};
