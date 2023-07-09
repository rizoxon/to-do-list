const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
app.use(express.static("public"))

let items = ["apple"]

// -----------------------------------------------------------------------------
// Get reques
// -----------------------------------------------------------------------------
app.get("/", (req, res)=>{
  let rawDate = new Date()
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }
  let date = rawDate.toLocaleDateString("en-EN", options)
  res.render('list', {date: date, listItems: items});
})
// -----------------------------------------------------------------------------
// Post reques
// -----------------------------------------------------------------------------
app.post("/", (req, res)=>{
  items.push(req.body.item)
  res.redirect("/")
})






app.listen(3000, ()=>{
  console.log("Server running on port 3000");
})
