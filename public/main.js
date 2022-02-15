const login_input = document.getElementById('login_input');
const register_input = document.getElementById('register_input');
const login_button = document.getElementById('login_button');
const register_button = document.getElementById('register_button');
const unlogged_div = document.getElementsByClassName('unlogged');
const logged_div = document.getElementsByClassName('logged');
const book_content = document.getElementById('book_content');

let login_text = '';
const book = [
    {
        number: 312312412,
        name: 'Homo'
    },
    {
        number: 312312412,
        name: 'Homo'
    },
    {
        number: 312312412,
        name: 'Homo'
    },
    {
        number: 312312412,
        name: 'Homo'
    },
    {
        number: 312312412,
        name: 'Homo'
    },
    {
        number: 312312412,
        name: 'Homo'
    },
    {
        number: 312312412,
        name: 'Homo'
    },
    {
        number: 312312412,
        name: 'Homo'
    },
    {
        number: 312312412,
        name: 'Homo'
    },
    {
        number: 312312412,
        name: 'Homo'
    },
];

login_button.addEventListener('click', login);

async function login() {
    loginRequest().then(value => {
        console.log(value);
    });
    login_text = login_input.value;
    for(let i = 0; i < unlogged_div.length; i++) unlogged_div[i].classList.add('hidden');
    for(let i = 0; i < logged_div.length; i++) logged_div[i].classList.remove('hidden');
    for(let i = 0; i < book.length; i++){
        book_content
    }
}

async function loginRequest(){
    const answer = await fetch(
        `http://localhost:3000/phoneBook/show`
    );
    const result = await answer.json();
    return result.data;
}