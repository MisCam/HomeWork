const CONFIG = {
    NAME: 'Eat Worker',
    VERSION: '0.0.1',
    PORT: 3000,
    
    MEDIATOR: {
        EVENTS: {
            USER_LOGIN: 'USER_LOGIN',
            USER_LOGOUT: 'USER_LOGOUT',
            USER_REGISTRATION: 'USER_REGISTRATION',
        },
        TRIGGERS: {
            CHECK_USER: 'CHECK_USER',
            GET_USER_ID: 'GET_USER_ID',
            ADD_USER: 'ADD_USER',
            DELETE_CONTACT: 'DELETE_CONTACT',
        }
    }
}

module.exports = CONFIG;