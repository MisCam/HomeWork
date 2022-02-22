const CONFIG = {
    NAME: 'Eat Worker',
    VERSION: '0.0.1',
    PORT: 3000,
    
    MEDIATOR: {
        EVENTS: {
            USER_LOGIN: 'USER_LOGIN',
        },
        TRIGGERS: {
            GET_USER_NAME: 'GET_USER_NAME',
        }
    }
}

module.exports = CONFIG;