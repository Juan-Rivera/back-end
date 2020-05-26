// Update with your config settings.
const pgConnection = process.env.DATABASE_URL || 'postgres://rbaerqqaoyjxak:b26f64a6bd3ace97e909898d72f98cd4160a7eacf900aef948d0d99ebadd2bfd@ec2-54-86-170-8.compute-1.amazonaws.com:5432/dlcng62aqv22n';

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/users.db3'
    },
    useNullAsDefault: true,
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
