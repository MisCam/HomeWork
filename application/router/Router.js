const express = require("express");
const router = express.Router();

const baseRouter = require("./BaseRouter");

function Router({ phoneBook }) {
  router.get("/", allow);
  router.get("/phoneBook/show", showPhoneBookHandler);
  router.get("/phoneBook/add/:number/:name", phoneBookAddHandler);
  router.get("/phoneBook/delete/:number", phoneBookDeleteHandler);
  router.get("/*", getError);

  const BaseRouter = new baseRouter();

  function getError(request, response) {
    response.json(BaseRouter.error(9000));
  }

  function showPhoneBookHandler(request, response) {
    response.json(phoneBook.getBook());
  }

  function phoneBookAddHandler(request, response) {
    const { number, name } = response.params;
    const result = phoneBook.add(number, name);
    if (result) {
      response.json(BaseRouter.answer(true));
    }
    response.json(BaseRouter.error(1001));
  }

  function phoneBookDeleteHandler(request, response) {
    for (let i = 0; i < book.length; i++) {
      if (book[i].number === request.params["number"]) {
        book.splice(i, 1);
        response.json(BaseRouter.answer("Пользователь был удалён"));
        return;
      }
    }
    response.json(BaseRouter.error(1002));
  }

  return router;
}

module.exports = Router;
