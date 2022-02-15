class PhoneBook {
    constructor() {
        this.book = [];
    }  
    isNumberValid = (number) => {
        while (number.includes(" ")) {
            number = number.replace(" ", "");
        }
        let bracket = 0;
        let dash = 0;

        for (let i = 0; i < number.length; i++) {
            if (number[i] === ")" || number[i] === "(") bracket++;
            if (bracket > 2) return false;
            if (number[i] === "-") dash++;
            if (dash > 2) return false;
        }
        if (bracket === 1 || dash === 1) return false;
        if (number[0] === '+' && number[0] !== '7') return false;

        if (bracket === 0 && dash === 0 && number[0] === '8' && number.length !== 11) return false;
        if (bracket === 0 && dash === 0 && number[0] === '+' && number.length !== 12) return false;
        if (bracket === 2 && dash === 2 && number[0] === '8' && number.length !== 16) return false;
        if (bracket === 2 && dash === 2 && number[0] === '+' && number.length !== 17) return false;
        if (bracket === 2 && dash === 0 && number[0] === '8' && number.length !== 14) return false;
        if (bracket === 2 && dash === 0 && number[0] === '+' && number.length !== 15) return false;
        if (bracket === 0 && dash === 2 && number[0] === '8' && number.length !== 14) return false;
        if (bracket === 0 && dash === 2 && number[0] === '+' && number.length !== 15) return false;

        return true;
    };
    getBook() {
        return this.book;
    }
    add(number, name) {
        if(this.isNumberValid(number)){
            this.book.push({
                number: number,
                name: name
            });
            return true;
        }
        return false;
    }
    delete(){
        
    }
}

module.exports = PhoneBook;