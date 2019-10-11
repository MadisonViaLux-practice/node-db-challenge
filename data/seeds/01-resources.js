
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {project_id: 1, resource_name: 'volts-RP', resource_description: 'Resource description for volts-RP'},
        {project_id: 2, resource_name: 'modded-RP', resource_description: 'Resource description for modded-RP'},
        {project_id: 3, resource_name: 'vanilla-RP', resource_description: 'Resource description for vanilla-RP'}
      ]);
    });
};
