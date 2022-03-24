const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  getUsers,
  getUser,
  getUserById,
  updateUserInfo,
  updateAvatar,
} = require('../controllers/users');
const { userUpdateValidation, avatarValidation, idValidation } = require('../middlewares/validationJoi');

router.get('/', auth, getUsers);
router.get('/me', auth, getUser);
router.get('/:userId', auth, idValidation, getUserById);
router.patch('/me', auth, userUpdateValidation, updateUserInfo);
router.patch('/me/avatar', auth, avatarValidation, updateAvatar);

module.exports = router;
