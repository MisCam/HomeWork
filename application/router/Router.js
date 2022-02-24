const express = require("express");
const router = express.Router();

const baseRouter = require("./BaseRouter");

function Router({ mediator }) {
    router.get("/book/show/:id", showPhoneBookHandler);
    router.get("/users/registration/:login/:password", registrationHandler);
    router.get("/users/login/:login/:password", loginHandler);
    router.get("/book/add/:user_id/:number/:name", phoneBookAddHandler);
    router.get("/book/delete/:user_id/:number", phoneBookDeleteHandler);
    router.get("/*", getError);

    const BaseRouter = new baseRouter();

    function getError(request, response) {
        response.json(BaseRouter.error(9000));
    }

    function showPhoneBookHandler(request, response) {
        const { user_id } = request.params;
        response.json(mediator.TRIGGERS.SHOW_CONTACTS(user_id));
    }

    function phoneBookAddHandler(request, response) {
        const { number, name } = request.params;
        if (result) {
            response.json(BaseRouter.answer(true));
        }
        response.json(BaseRouter.error(1001));
    }

    function phoneBookDeleteHandler(request, response) {
        const { number } = request.params;
        response.json(BaseRouter.answer("Пользователь был удалён"));
        return;
        response.json(BaseRouter.error(1002));
    }

    function registrationHandler(request, response) {
        const { login, password } = request.params;
        const user = mediator.get(mediator.TRIGGERS.CHECK_USER, {login, password});
        if (!user) {
            mediator.call(mediator.EVENTS.USER_REGISTRATION, {login, password});
            response.json(BaseRouter.answer('Пользователь был зарегестрирован'));
            return;
        }
        response.json(BaseRouter.error(1001));
    }

    function loginHandler(request, response) {
        const { login, password } = request.params;
        const user_id = mediator.get(mediator.TRIGGERS.GET_USER_ID, {login, password});
        if (user_id) {            
            response.json(BaseRouter.answer(mediator.call(mediator.EVENTS.USER_LOGIN, user_id)));
            return;
        }
        response.json(BaseRouter.error(1003));
    }

    return router;
}

module.exports = Router;
