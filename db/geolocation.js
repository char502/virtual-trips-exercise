const knex = require('./knex');

// function getLocationData() {
//   return knex('data_GB').select('*');
// }

// function getLocationData(name) {
//   return knex('data_GB').select('*').where('name', name);
// }

function getLocationData(name) {
  // const silly = `%${queryName}%`;

  // console.log(silly);

  return knex('data_GB').where('name', 'like', name).orderBy('name');

  // if (name !== '') {
  //   return knex('data_GB').where('name', 'like', `%${name}%`);
  // }
}

// function getLocationData(name) {
//   return knex.schema.raw(`SELECT * FROM data_GB WHERE name LIKE %name%`);
// }

module.exports = {
  getLocationData,
};
