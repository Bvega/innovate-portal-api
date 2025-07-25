const Bookmark = require('../models/Bookmark');

exports.createBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.create({ ...req.body, user: req.user.id });
    res.status(201).json(bookmark);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBookmarks = async (req, res) => {
  const bookmarks = await Bookmark.find({ user: req.user.id });
  res.json(bookmarks);
};

exports.getBookmark = async (req, res) => {
  const bookmark = await Bookmark.findOne({ _id: req.params.id, user: req.user.id });
  if (!bookmark) return res.status(404).json({ message: 'Not found' });
  res.json(bookmark);
};

exports.updateBookmark = async (req, res) => {
  const bookmark = await Bookmark.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );
  if (!bookmark) return res.status(404).json({ message: 'Not found or unauthorized' });
  res.json(bookmark);
};

exports.deleteBookmark = async (req, res) => {
  const result = await Bookmark.deleteOne({ _id: req.params.id, user: req.user.id });
  if (result.deletedCount === 0) return res.status(404).json({ message: 'Not found or unauthorized' });
  res.json({ message: 'Deleted' });
};
