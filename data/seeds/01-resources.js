
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'volts-RP', description: 'Resource description for volts-RP'},
        {name: 'modded-RP', description: 'Resource description for modded-RP'},
        {name: 'vanilla-RP', description: 'Resource description for vanilla-RP'}
      ]);
    });
};
