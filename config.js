const CONFIG = {
    NAME: 'Eat Worker',
    VERSION: '0.0.1',
    PORT: 3000,
    
    MEDIATOR: {
        EVENTS: {
            USER_LOGIN: 'USER_LOGIN',
            USER_LOGOUT: 'USER_LOGOUT',
        },
        TRIGGERS: {
            GET_USER_NAME: 'GET_USER_NAME',
            SHOW_CONTACTS: 'SHOW_CONTACTS',
            ADD_USER: 'ADD_USER',
        }
    }
}

module.exports = CONFIG;