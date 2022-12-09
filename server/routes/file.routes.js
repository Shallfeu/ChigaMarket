const Router = require('express')
const router = new Router()
const auth = require('../middleware/auth.middleware')
const FileController = require('../controllers/file.controller')

router.post('/', auth, FileController.createDir)
router.post('/upload', auth, FileController.uploadFile)
router.post('/avatar', auth, FileController.uploadAvatar)
router.get('/', auth, FileController.getFiles)
router.delete('/avatar', auth, FileController.deleteAvatar)

module.exports = router