export const environment = process.env.NODE_ENV
export const port = process.env.PORT
export const timezone = process.env.TZ

export const db = {
	name: process.env.DB_NAME || '',
	host: process.env.DB_NAME || '',
	port: process.env.DB_NAME || '',
	user: process.env.DB_NAME || '',
	password: process.env.DB_USER_PWD || '',
	minPoolSize: parseInt(process.env.DB_MIN_POOL_SIZE || '5'),
	maxPoolSize: parseInt(process.env.DB_MAX_POOL_SIZE || '10')
}

export const logDirectory = process.env.LOG_DIR

export const corsUrl = process.env.CORS_URL