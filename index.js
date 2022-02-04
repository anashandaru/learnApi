const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const apiRoutes = require("./api-routes");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/simplemessage', { useNewUrlParser: true});

const db = mongoose.connection;


if(!db)console.log("Error connecting DB")
else console.log("MongoDB connected successfully")


// Send message for default URL
app.get('/', (req, res) => res.send('Hello this app is created to learn and explore node Js'));

// Use Api routes in the App
app.use('/api', apiRoutes);

// Launch app to listen to specified port
const port = 8080;
app.listen(port, () => {
    console.log("Running RestHub on port " + port);
});