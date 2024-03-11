const deleteComment = require('../../repositories/comments/deleteComment')
const selectCommentById = require("../../repositories/comments/selectCommentById")
const generateError = require("../../helpers/generateError")

const removeCommentById = async (req: any, res:any, next:any) => {
  try {
    const {commentId} = req.params
    const commentDB = await selectCommentById(commentId)
    if (!commentDB) {
      generateError('Comment does not exists', 404)
    }
    const userId = req.auth.id
    await deleteComment(commentId)
    res.status(200).send({status: 'ok', message: 'Comment deleted'})
  } catch (error) {
    next(error)
  }
}

module.exports = removeCommentById
