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
            SHOW_PHONE_BOOK: 'SHOW_PHONE_BOOK',
            SHOW_NOTE_BOOK: 'SHOW_NOTE_BOOK',
            CREATE_PHONE_BOOK: 'CREATE_PHONE_BOOK',
            CREATE_NOTE_BOOK: 'CREATE_NOTE_BOOK',
            ADD_USER: 'ADD_USER',
        }
    }
}

module.exports = CONFIG;