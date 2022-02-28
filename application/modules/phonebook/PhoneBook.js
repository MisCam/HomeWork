const BaseModule = require('../BaseModule');

class PhoneBook extends BaseModule {
    constructor(options) {
        super(options);
        this.books = [];

        this.mediator.set(this.TRIGGERS.ADD_CONTACT, data => this.add(data));

        this.mediator.set(this.TRIGGERS.DELETE_CONTACT, data => this.deleteContact(data));

        this.mediator.set(this.TRIGGERS.GET_PHONE_BOOK, user_id => this.show(user_id));
        
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

    add(data) {
        const {number, name, user_id} = data;
        const answer = this.isNumberValid(number);
        if (answer.answer) {
            this.books[user_id].push({
                number: answer.str,
                name: name,
                
            });
            return this.show(user_id);
        }
        return false;
    }

    deleteContact(data) {
        const {number, user_id} = data;
        for(let i = 0; i < this.books[user_id].length; i++){
            console.log(this.show(user_id));
            if(this.books[user_id][i].number === number){
                this.books[user_id].splice(i, 1);
                console.log(this.show(user_id));
                return this.show(user_id);
            }
        }
        return false;
    }
}

module.exports = PhoneBook;
