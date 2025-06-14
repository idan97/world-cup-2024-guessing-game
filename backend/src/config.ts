export const config = {
  port: parseInt(process.env['PORT'] || '3000', 10),
  nodeEnv: process.env['NODE_ENV'] || 'development',
  databaseUrl: process.env['DATABASE_URL'] || '',
  jwtSecret: process.env['JWT_SECRET'] || 'dev-secret-change-in-production',
  isDevelopment: process.env['NODE_ENV'] !== 'production',
  isProduction: process.env['NODE_ENV'] === 'production',
};
