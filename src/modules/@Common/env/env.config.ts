import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  mode: process.env.NODE_ENV === 'production',
  env: process.env.NODE_ENV,
  name: process.env.APP_NAME,
  host: process.env.APP_HOST,
  
  port: process.env.APP_PORT,
 
  db_Type: process.env.DB_TYPE,
  db_Host: process.env.DB_HOST,
  db_Database: process.env.DB_DATABASE,
  db_Port: process.env.DB_PORT,
  client_Host: process.env.CLIENT_HOST,
}));