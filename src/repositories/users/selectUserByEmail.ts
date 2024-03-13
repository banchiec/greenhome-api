const getPool = require('../../database/getPool')

const selectUserByEmail = async (email: string) => {
  const pool = getPool()

  const [[user]] = await pool.query('SELECT * FROM users WHERE email = ?', [
    email,
  ])
  console.log(user)
  return user
}

module.exports = selectUserByEmail