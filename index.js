require('./models/db');

const express = require ("express");
const path = require ("path");
const handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const {allowInsecurePrototypeAccess,} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');

//const { exec } = require("child_process");
//const { extname } = require("path");
const studentController = require("./controllers/studentController");
var app = express();


app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get("/", (req,res) => {
    res.send(`<h2>Welcome to Students Database!!</h2>
        <h3>Click here to get access to the <b> <a href="/student/list">Database</a></b></h3>`);
});

app.set("views", path.join(__dirname, "/views/"));


app.engine("hbs", 
    exphbs.engine ({ //exphbs has been tweeked to exphbs.engine because of the error thrown and resolution offered on https://stackoverflow.com/questions/69959820/typeerror-exphbs-is-not-a-function
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: "hbs",
    defaultLayout: "mainLayout", //check this 
    layoutsDir: __dirname + "/views/layouts/",
}));

app.set("view engine", "hbs");

app.listen(3000, () => {
    console.log('Server started at part 3000');
});

app.use("/student", studentController);