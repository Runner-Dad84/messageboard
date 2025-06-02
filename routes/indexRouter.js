// routes/indexRouter.js
const { Router } = require("express");
const indexRouter = Router();

//router data to be used

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

//router logic - what are we doing with the data

//show list of all submissions
indexRouter.get("/", (req, res) => res.render("index", { messages }));

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


module.exports = indexRouter;