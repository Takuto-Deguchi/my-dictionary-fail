/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user').insert([
    {
      name: 'test user',
      email: 'user@example.com',
      password: 'sssss',
    },
  ])
}
