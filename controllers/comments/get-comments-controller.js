const selectComments = require('../../repositories/comments/selectComments')

const getComments = async (req, res, next) => {
  try {
    let comment = await selectComments()

    res.status(200).send({status: 'ok', data: comment})
  } catch (error) {
    next(error)
  }
}

module.exports = getComments
