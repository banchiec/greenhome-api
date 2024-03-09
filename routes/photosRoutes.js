const express = require('express')
const {getPhotos} = require('../controllers/photos')
const getPhotoById = require('../controllers/photos/getPhotoById')
const router = express.Router()

router.get('/', getPhotos)
router.get('/:id', getPhotoById)

module.exports = router
