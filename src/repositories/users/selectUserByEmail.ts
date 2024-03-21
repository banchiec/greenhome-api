const getPool = require('../../database/getPool')
import { PrismaClient } from "@prisma/client"

const selectUserByEmail = async (email: string) => {
  const pool = getPool()
  
  const prismaCliente = new PrismaClient()

  const [[user]] = await pool.query('SELECT * FROM users WHERE email = ?', [
    email,
  ])
  console.log(user)
  return user
}

module.exports = selectUserByEmail
