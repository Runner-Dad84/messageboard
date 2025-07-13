const pool = require('./pool');

//return all comments
async function returnAllComments() {
  const { rows } = await pool.query("SELECT * FROM comments");
  return rows;
}

//return speicifc comment
async function returnThisComment(id) {
  const { rows } = await pool.query('SELECT * FROM comments WHERE id=$1', [id]);
  return rows[0];
}

//add comment
async function insertNewComment(comment, author) {
    const query = 'INSERT INTO comments (comment, author) VALUES ($1, $2)';
  await pool.query(query, [comment, author]);
}

module.exports = {
  returnAllComments,
  insertNewComment,
  returnThisComment
};