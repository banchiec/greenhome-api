import  mysql from 'mysql2/promise';
import { config } from 'dotenv'

config()
const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_USER_PWD,
  DB_NAME,
}: any= process.env

let pool: any

const getPool = () => {
  /** Si no hay un pool ya creado, llamamos a createPool con los datos requeridos para crear uno */
  if (!pool) {
    pool = mysql?.createPool({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "Loquitasmysql11031$",
      database: "shop_example",
      timezone: 'Z',
      connectionLimit: 10,
    })
  }

  /** Una vez tenemos el pool, lo retornamos para poder hacerle consultas. Él se encargará automáticamente de abrir y cerrar conexiones con la DB, según sea necesario */
  return pool
}

export default getPool
