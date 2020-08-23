
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

 const inputs = {
   reArray: []
 }

app.get("/", function(req,res) {

  res.render("home", {inputs: inputs});
});

app.get("/reverse", function(req,res) {
  if(req.query.word)
  {
    const ray = req.query.word;
    const reverse = _.reverse(ray.split('')).join('');
    inputs.reArray.push(reverse);
    res.redirect("/");
  }
  res.render("reverse");
});

app.post("/reverse", function(req,res) {
  const str = req.body.reverseString;
  const reverse = _.reverse(str.split('')).join('');
  inputs.reArray.push(reverse);
  res.redirect("/");

});




app.listen(process.env.PORT || 3000, function(){ // dynamic or local host
  console.log("server 3000 online");
});
