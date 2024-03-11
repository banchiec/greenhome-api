const getPool = require('../../database/getPool')

const selectLastPublications = async (req, res) => {
  try {
    const pool = getPool()
    const [photo] = await pool.query(
      'SELECT ph.name_photo, ph.description_photo, u.username, ph.id, user_id, u.avatar FROM photo ph INNER JOIN users u ON ph.user_id = u.id ORDER BY ph.created_at DESC;'
    )
    res.status(200).send({status: 'ok', data: photo})
  } catch (error) {
    console.log(error, 'Publication doesn´t exist')
  }
}
module.exports = selectLastPublications
