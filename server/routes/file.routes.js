const Router = require('express');
const router = new Router();
const auth = require('../middleware/auth.middleware');
const FileController = require('../controllers/file.controller');
const fileController = require('../controllers/file.controller');

router.get('/', auth, FileController.getFiles);
router.post('/', auth, FileController.createDir);

router.post('/upload', auth, FileController.uploadFile);

router.post('/avatar', auth, FileController.uploadAvatar);
router.delete('/avatar', auth, FileController.deleteAvatar);

router.post('/product', auth, fileController.uploadProductImg);
router.delete('/product', auth, FileController.deleteProductImg);

module.exports = router;
