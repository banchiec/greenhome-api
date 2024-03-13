const getPool = require('../../database/getPool')
const bcrypt = require('bcrypt')
const {generateError} = require('../../helpers')

interface userType {
  id?: number
  username: string
  password?: string
  email: string,
  avatar: string
  avatarName: string
  encryptedPassword: string
}

const updateUserById = async ({avatar, username, email, password, id}: userType, req: any) => {
  if (req.body.passwd != undefined) {
    password = await bcrypt.hash(password, 10)
  }

  const pool = getPool()
  const [{affectedRows}] = await pool.query(
    'UPDATE users SET avatar = ?,  username = ?,  email = ?, passwd = ? WHERE id = ?',
    [avatar, username, email, password, id]
  )
  return affectedRows
}

module.exports = updateUserById
