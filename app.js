const express = require("express");
const app = express();
const Mediator = require('./application/modules/Mediator');
const PhoneBook = require("./application/modules/phonebook/PhoneBook");
const UserManager = require("./application/modules/userManager/UserManager");

const { PORT, NAME, VERSION, MEDIATOR } = require('./config');
const mediator = new Mediator(MEDIATOR);
new UserManager({ mediator });
new PhoneBook({ mediator });

const Router = require("./application/router/Router");
const router = new Router({ mediator });
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.static(__dirname + "/public"));
app.use("/", router);

app.listen(PORT, () => console.log(`App ${NAME} version ${VERSION}`));
