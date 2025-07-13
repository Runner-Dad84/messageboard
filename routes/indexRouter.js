// routes/indexRouter.js
const express = require("express");
const indexRouter = express.Router();
const commentController = require("../controllers/commentController");




//show all users
indexRouter.get('/', commentController.getComments);
indexRouter.post('/new', commentController.postNewComment);

//show specific submission
indexRouter.get("/submission/:id", commentController.getThisComment);


//router logic - what are we doing with the data

/*
//show specific submission
indexRouter.get("/submission/:id", (req, res) => { 
  const message = messages[req.params.id];
  
  if(!message){ return res.status(404).send('Message not located')}
  res.render("submission", { message });
})

indexRouter.post("/new", (req, res) => {
    const { user, text } = req.body;
    if ( user && text ) {
        messages.push({ user: user, text: text, added: new Date() })
    }
    
res.redirect("/")
});

indexRouter.get("/submission", (req, res) => { 
  res.send('You need to prodive id!!!!')
});
*/

module.exports = indexRouter;