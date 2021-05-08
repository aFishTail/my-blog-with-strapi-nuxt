module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('MYSQL_HOST', 'localhost'),
        port: env.int('MYSQL_PORT', 5432),
        database: env('MYSQL_DATABASE', 'strapi'),
        username: env('MYSQL_USER', 'strapi'),
        password: env('MYSQL_PASSWORD', 'strapi'),
        // schema: env('DATABASE_SCHEMA', 'public'), // Not Required
        // ssl: {
        //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        // },
      },
      options: {
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
