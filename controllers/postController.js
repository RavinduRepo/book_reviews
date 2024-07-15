const db = require('../config/dbConfig');
const Post = require('../models/postModel');

const getPosts = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM reviews');
    const posts = rows.map(row => new Post(
      row.imagePath,
      row.bookName,
      row.authorName,
      row.context,
      row.rating,
      row.reviwerName
    ));
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

module.exports = { getPosts };
