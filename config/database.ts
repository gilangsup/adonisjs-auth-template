import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: 'postgres',
  connections: {
    postgres: {
      client: 'pg',
      connection: {
        host: env.get('PGHOST'),          // Use PGHOST instead of DB_HOST
        port: env.get('PGPORT'),          // Use PGPORT instead of DB_PORT
        user: env.get('PGUSER'),          // Use PGUSER instead of DB_USER
        password: env.get('PGPASSWORD'),  // Use PGPASSWORD instead of DB_PASSWORD
        database: env.get('PGDATABASE'),  // Use PGDATABASE instead of DB_DATABASE
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig
