const knex = require('knex');

const connectedKnex = knex({
  client: 'sqlite3',
  connection: {
    filename: 'locations.sqlite3',
  },
  useNullAsDefault: true,
});

module.exports = connectedKnex;
