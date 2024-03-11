const getPool = require('../../database/getPool')

const deleteComment = async (commentId: number) => {
  const pool = getPool()

  const [{affectedRows}] = await pool.query(
    'DELETE FROM comments WHERE comments_id = ?',
    [commentId]
  )
  return affectedRows
}

module.exports = deleteComment
