
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'test', email: 'test@test.com', password: 'test'},
        {id: 2, name: 'test2', email: 'testing@test.com', password: 'test2'}
      ]);
    });
};
