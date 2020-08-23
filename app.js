
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
  console.log(inputs);
  res.render("home", {inputs: inputs});
});

app.get("/reverse", function(req,res) {
  if(req.query.word)
  {
    const ray = req.query.word;
    const reverse = _.reverse(ray.split('')).join('');
    const len = reverse.length;
    const item = {
      length: len,
      rev: reverse
    }
    inputs.reArray.push(item);
    res.redirect("/");
  }
  res.render("reverse");
});

app.post("/reverse", function(req,res) {
  const str = req.body.reverseString;
  const reverse = _.reverse(str.split('')).join('');
  const len = reverse.length;
  console.log(len);
  const item = {
    length: len,
    rev: reverse
  }
  inputs.reArray.push(item);
  res.redirect("/");

});

app.post("/", function(req,res) {
  inputs.reArray = [];
  res.redirect("/");
});


app.listen(process.env.PORT || 3000, function(){ // dynamic or local host
  console.log("server 3000 online");
});
