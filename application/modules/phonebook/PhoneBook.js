class PhoneBook {
  constructor() {
    this.books = [];
  }
  isNumberValid = (number) => {
    if (number.replace(/[^\d]/g, "").length === 11) {
      return {
        answer: true,
        str: number.replace(/[^\d]/g, ""),
      };
    } else {
      return {
        answer: false,
        str: "",
      };
    }
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
  delete() {}
}

module.exports = PhoneBook;
