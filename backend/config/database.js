module.exports = ({env}) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        database: env('MYSQL_DATABASE'),
        host: env.int('MYSQL_HOST'),
        port: env('MYSQL_PORT'),
        username: env('MYSQL_USER'),
        password: env('MYSQL_PASSWORD')
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
