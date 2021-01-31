const knex = require('./knex');

function getLocationData(name) {
  return knex('data_GB').where('name', 'like', name).orderBy('name');
}

module.exports = {
  getLocationData,
};
