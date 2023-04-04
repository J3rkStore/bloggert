const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log('hi');
    console.log(req.body);
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// get request to http://127.0.0.1:3001/api/comments retrieves all comments
router.get('/', async (req, res) => {
  try {
    const commentD = await Comment.findAll();
    res.status(200).json(commentD);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
