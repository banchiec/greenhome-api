const {generateError, uploadImage} = require('../../helpers')
const {selectUserById, updateUserById} = require('../../repositories/users')
const editUserSchema = require('../../schemas/users/editUserSchema')
const idUserSchema = require('../../schemas/users/idUserSchema')
const bcrypt = require('bcrypt')

const editUser = async (req: any, res:any, next:any) => {
  try {
    const idUser = req.auth.id
    const userDB = await selectUserById(idUser)
    const {username} = req.body
    let {avatar} = req.files
    avatar = await uploadImage(avatar?.data)
    if (!userDB) {
      throw generateError('User doesn´t exists', 400)
    }
    const userId = req.auth.id
    if (userDB.id !== userId) {
      throw generateError("You cant update someone else's entry", 400)
    }
    await updateUserById({...userDB, ...req.body, avatar}, req)
    res
      .status(200)
      .send({
        status: 'ok',
        message: 'User updated',
        avatar: avatar,
        username: username,
      })
  } catch (error) {
    next(error)
  }
}

module.exports = editUser
