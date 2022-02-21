const express = require("express");
const router = express.Router();

const baseRouter = require("./BaseRouter");

function Router({ phoneBook, userManager }) {
  router.get("/phoneBook/show", showPhoneBookHandler);
  router.get("/api/registration/:login/:password",registrationHandler);
  router.get("/api/login/:login/:password", loginHandler);
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
    const { number, name } = request.params;
    const result = phoneBook.add(number, name,id);
    if (result) {
      response.json(BaseRouter.answer(true));
    }
    response.json(BaseRouter.error(1001));
  }

  function phoneBookDeleteHandler(request, response) {
    const { number } = request.params
    for (let i = 0; i < book.length; i++) {
      if (book[i].number === number) {
        book.splice(i, 1);
        response.json(BaseRouter.answer("Пользователь был удалён"));
        return;
      }
    }
    response.json(BaseRouter.error(1002));
  }

  function registrationHandler(request, response){
    const {login, password} = request.params;
    const result = this.userManager.registration(login, password);
    if(result){ 
      response.json(BaseRouter.answer('Пользователь был зарегестрирован'));
      return;
    }
    response.json(BaseRouter.error(1001));
  }

  function loginHandler(request, response){
    const {login, password} = request.params;
    const result = this.userManager.login(login, password);
    if(result){ 
      response.json(BaseRouter.answer('Пользовталей успешно зашел'));
      return;
    }
    response.json(BaseRouter.error(1003));
  }

  return router;
}

module.exports = Router;
