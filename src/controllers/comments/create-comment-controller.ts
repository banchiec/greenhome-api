const createComment = require('../../repositories/comments/create.comment')
const {selectUserById} = require('../../repositories/users')
const createCommentController = async (req: any, res: any, next: any) => {
  try {
    const user_id = req.auth.id
    const {comment} = req.body
    console.log(comment)
    const {photoId} = req.params
    let user = await selectUserById(user_id)
    let {username, avatar} = user
    const insertId = await createComment({comment, user_id, photoId})
    res.status(201).send({
      status: 'ok',
      data: {id: insertId, comment, user_id, photoId, username, avatar},
    })
  } catch (error) {
    next(error)
  }
}

module.exports = createCommentController
