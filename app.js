const express = require("express");
const app = express();

const PhoneBook = require('./application/modules/phonebook/PhoneBook');
const phoneBook = new PhoneBook;

const Router = require('./application/router/Router');
const router = new Router({ phoneBook });

app.use(express.static(__dirname + "/public"));
app.use('/', router);

app.listen(3000, () => console.log("Я работаю за еду!"));
