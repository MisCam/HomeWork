const BaseModule = require('../BaseModule');

class PhoneBook extends BaseModule {
    constructor(options) {
        super(options);
        this.books = [];

        this.mediator.subscribe(this.EVENTS.USER_LOGIN, user_id => this.show(user_id));
        
        this.mediator.subscribe(
            this.EVENTS.USER_REGISTRATION, 
            () => this.createBook(),
        );
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

    show(user_id) {
        return this.books[user_id];
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


    deleteContact(number, user_id) {
        for(let i = 0; i < this.books[user_id].length; i++){
            if(this.books[user_id][i].number === number){
                this.books[user_id].splice(i, 1);
                return 'Пользователь удален';
            }
        }
        return false;
    }
}

module.exports = PhoneBook;
