const bcrypt = require('bcrypt')
const {uploadImage} = require('../../helpers')
const generateError = require('../../helpers/generateError')
const {insertUser, selectUserByEmail} = require('../../repositories/users')
const {registerUserSchema} = require('../../schemas')

const registerUser = async (req: any, res: any, next: any) => {
  try {
    await registerUserSchema.validateAsync(req.body)
    const {username, email, passwd} = req.body
    const userWithSameEmail = await selectUserByEmail(email)
    if (userWithSameEmail) {
      throw generateError('Already exists  an user with the same email')
    }
    let avatarName = ''
    if (req.files?.avatar) {
      let {avatar} = req.files
      avatarName = await uploadImage(avatar?.data)
    }
    const encryptedPassword = await bcrypt.hash(passwd, 10)
    const insertId = await insertUser({
      username,
      email,
      avatarName,
      encryptedPassword,
    })
    console.log(insertId)
    res.status(201).send({status: 'ok', data: {id: insertId, avatarName}})
  } catch (error) {
    next(error)
  }
}
module.exports = registerUser
