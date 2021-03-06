const BaseModule = require("../BaseModule");

class NoteBook extends BaseModule {
    constructor(options){
        super(options);
        this.noteBooks = [];
        
        this.mediator.set(this.TRIGGERS.GET_NOTE_BOOK, user_id => this.showNoteBook(user_id));

        this.mediator.subscribe(
            this.EVENTS.USER_REGISTRATION, 
            () => this.createNoteBook(),
        );
    }

    createNoteBook(){
        this.noteBooks.push([]);
        return true;
    }

    showNoteBook(user_id){
        return this.noteBooks[user_id];
    }

    addNote(text, user_id){
        if(text === ''){
            return false;
        } else {
            this.noteBooks[user_id].push(text);
            return true;
        }
    }

    deleteNote(user_id, note_id){
        if(note_id) {
            this.noteBooks[user_id].splice(note_id, 1);
            return true;
        }
        return false;
    }
}

module.exports = NoteBook;