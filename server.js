const express = require("express");
const path = require("path");
// create the express app
const app = express();
// require bodyParser since we need to handle post data for adding a user
const bodyParser = require("body-parser");
app.use(bodyParser.json()); 
//app.use(bodyParser.urlencoded({extended: true}));
// static content 
app.use(express.static(path.join(__dirname, "./public/dist")));
// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the function in a variable
const routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);
// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})