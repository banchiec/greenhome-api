const getPool = require('../../database/getPool')

interface commentType {
  user_id: number
  photo_id: number
  comment: string
}

const createComment = async ({comment , user_id, photo_id}: commentType) => {
  const pool = getPool()
  const [{insertId}] = await pool.query(
    'INSERT INTO comments(comment, user_id, photo_id) VALUES (?, ?, ?)',
    [comment, user_id, photo_id]
  )
  return insertId
}
module.exports = createComment
