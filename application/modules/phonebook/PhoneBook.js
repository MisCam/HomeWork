const BaseModule = require('../BaseModule');

class PhoneBook extends BaseModule {
    constructor(options) {
        super(options);
        this.books = [];

        const name = this.mediator.get(
            this.TRIGGERS.GET_USER_NAME, 
            'Ivanoff'
        );

        this.mediator.subscribe(this.EVENTS.USER_LOGIN, user => this.userLogin(user));
    }

    userLogin(user) {
        console.log('in PhoneBook', user);
    }

    isNumberValid(number) {
        if (number.replace(/[^\d]/g, "").length === 11) {
            return {
                answer: true,
                str: number.replace(/[^\d]/g, ""),
            };
        }
        return {
            answer: false,
            str: "",
        };
    };

    show(id) {
        return this.books[id];
    }

    createBook() {
        this.books.push([]);
        return true;
    }

    add(number, name, id) {
        const answer = this.isNumberValid(number);
        if (answer.answer) {
            this.books[id].push({
                number: answer.str,
                name: name,
            });
            return true;
        }
        return false;
    }
    delete() { }
}

module.exports = PhoneBook;
