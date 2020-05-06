// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(bodyParser.json());


// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// //const app = express();
// //app.use(myfitness);

// const db = require("/Users/Shared/fitnesspal/events-app/src/models");
// db.sequelize.sync();
// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to my fitness application." });
// });
//  require("./src/routes/tutorial.routes")(app);
// // set port, listen for requests
// const PORT = process.env.PORT || 8085;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5003

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('/Users/Shared/fitnesspal-3/events-app/src/routes/Users.js')

app.use('/users', Users)

app.listen(port, () => {
  console.log('Server is running on port: ' + port)
})