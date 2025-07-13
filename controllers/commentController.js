const db = require("../db/queries");

//print all comment to board
async function getComments(req, res) {
  try {
  const comments = await db.returnAllComments();
  console.log("Comments: ", comments);
  res.render('index', { comments });
  } catch (error) {
    console.error('Error in getComments:', error);
    res.status(500).send('Error fetching comments')
  }
}

//print this speccific comment
async function getThisComment (req, res) {
    const commentId = req.params.id;
    try{
        const comment = await db.returnThisComment(commentId);
        console.log("Comment: ", comment);
        res.render("submission", { comment });
    } catch (error) {
        res.status(500).send('Comment not located')}
}

//add new comment
async function postNewComment(req, res) {
  const { comment, author } = req.body;
  console.log('success', comment)
  try {
    await db.insertNewComment(comment, author);
    console.log("Successfully added new comment")
    res.redirect('/');
  } catch (error) {
    console.error("DB error", error);
    res.status(500).send("Error Saving comment.") }  
}

module.exports = {
    getComments,
    postNewComment,
    getThisComment 
}
  