function BaseRouter(){

    const ERROR = {
        404: "Page not found",
        9000:"Unknown error",
        1001: 'Неправильный номер телефона',
        1002: 'Пользователь не найден'
    }


    this.answer = data => {
        return { result: 'ok', data};
    }

    this.error = code => {
        const error = (code && ERROR[code]) ? 
        {code, text: ERROR[code] }:
        {code:9000, text: ERROR[9000] }
    }
}

module.exports = BaseRouter;