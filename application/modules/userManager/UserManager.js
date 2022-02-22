const BaseModule = require('../BaseModule');

class userManager extends BaseModule {
    constructor(options) {
        super(options);
        this.users = [];

        this.mediator.set(
            this.TRIGGERS.GET_USER_NAME, 
            lastName => `Vasya ${lastName || 'Noname'}`
        );
    }

    registration(login, password) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].login === login) {
                return false;
            }
        }

        if (login && password) {
            const user = { login, password };
            this.users.push(user);
        }
        return true;
    }

    login(login, password) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].login === login &&
                this.users[i].password === password
            ) {
                this.mediator.call(this.EVENTS.USER_LOGIN, this.users[i]);
                return i;
            }
        }
        return false;
    }
}

module.exports = userManager;