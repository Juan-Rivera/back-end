// Update with your config settings.
const pgConnection = process.env.DATABASE_URL || "postgres://sbnrlefudaxgep:354015ab31f3185cbb2596c0c1d2930b7b20e4dd09aa7640ef33573cda2305af@ec2-54-159-138-67.compute-1.amazonaws.com:5432/dfikf4drso4vf7";

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/users.db3'
    },
    useNullAsDefault: true,
    pool : {
      afterCreate: (conn, done) => {
          conn.run("PRAGMA foreign_keys = ON",done);
      }
  },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    }
  },

  // heroku postgres
  production: {
    client: "pg", // npm i pg
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    }
  }

};
