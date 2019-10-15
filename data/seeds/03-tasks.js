
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {task_description: 'Volts description of what needs to be done.', 
        task_notes: 'This can be whatever you want to put here...', 
        task_completed: false,
        project_id: 1
      },

        {task_description: 'Modded description of what needs to be done.', 
        task_notes: 'This can be whatever you want to put here...', 
        task_completed: false,
        project_id: 2
      },

        {task_description: 'Vanilla description of what needs to be done.', 
        task_notes: 'This can be whatever you want to put here...', 
        task_completed: false,
        project_id: 3
      }
      ]);
    });
};
