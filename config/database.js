module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cde0uu82i3mu1eq454f0-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarvnz'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'YbzQLHjBWhCyXsw0bbV4WVJRkux1N5lw'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
