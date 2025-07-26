const express = require('express');
const router = express.Router();
const {
  createBookmark,
  getBookmarks,
  getBookmark,
  updateBookmark,
  deleteBookmark
} = require('../controllers/bookmarkController');
const { authMiddleware } = require('../utils/auth');

router.use(authMiddleware); // apply to all

router.post('/', createBookmark);
router.get('/', getBookmarks);
router.get('/:id', getBookmark);
router.put('/:id', updateBookmark);
router.delete('/:id', deleteBookmark);

module.exports = router;
