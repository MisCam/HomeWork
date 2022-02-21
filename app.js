const express = require("express");
const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const PhoneBook = require("./application/modules/phonebook/PhoneBook");
const phoneBook = new PhoneBook();

const UserManager = require("./application/modules/userManager/UserManager");
const userManager = new UserManager();

const Router = require("./application/router/Router");
const router = new Router({ phoneBook, userManager});


app.use(express.static(__dirname + "/public"));
app.use("/", router);

app.listen(3000, () => console.log("Я работаю за еду!"));
