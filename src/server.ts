const cors = require('cors')
const fileUpload = require('express-fileupload')
// const getCommentById = require('./controllers/comments/getCommentById')
// const getComments = require('./controllers/comments/getComments')
// const getCommentByPhotoId = require('./controllers/comments/getCommentsByPhotoId')
// const removeCommentById = require('./controllers/comments/removeCommentById')
// const getLikesByPhotoId = require('./controllers/likes/getLikesByPhotoId')
// const createComment = require('./controllers/comments/createComment')
// const {Like} = require('./controllers/likes')

require('dotenv').config()
// const {
//   createPhotos,
//   selectLastPublications,
//   getPhotos,
// } = require('./controllers/photos')

// const {
//   registerUser,
//   loginUser,
//   getUserGalleryImages,
// } = require('./controllers/users')

// const editUser = require('./controllers/users/editUser')
// const {generateError} = require('./helpers')
// const {validateAuth, handleError} = require('./middlewares')
// const getUserInfo = require('./controllers/users/getUserInfo')
// const {validate} = require('./schemas/photos/createPhotoSchema')
// const getPhotoById = require('./controllers/photos/getPhotoById')
// const checkUserLike = require('./repositories/likes/checkUserLike')

const {PORT} = process.env

const app = require('./app')

app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
)

app.listen(`${PORT}`, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}`)
})
