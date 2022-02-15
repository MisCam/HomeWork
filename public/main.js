const login_input = document.getElementById('login_input');
const password_input = document.getElementById('password_input');
const login_button = document.getElementById('login_button');
const register_button = document.getElementById('register_button');
const unlogged_div = document.getElementsByClassName('unlogged');
const logged_div = document.getElementsByClassName('logged');
const book_content = document.getElementById('book_content');
const login_text = document.getElementById('login_text');
const logout_button = document.getElementById('logout_button');

let actual_login = '';
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
logout_button.addEventListener('click', logout);

async function login() {
    if(login_input.value === '' || password_input.value === '') return;
    /* loginRequest().then(value => {
        console.log(value);
    }); */
    actual_login = login_input.value;
    login_text.innerHTML = 'Привет, ' + actual_login;
    for(let i = 0; i < unlogged_div.length; i++) unlogged_div[i].classList.add('hidden');
    for(let i = 0; i < logged_div.length; i++) logged_div[i].classList.remove('hidden');
    createContacts();
}
function createContacts() {
    for(let i = 0; i < book.length; i++){
        const contact = document.createElement('div');
        contact.classList.add('contact');
        contact.setAttribute('id', i);
        const number = document.createElement('label');
        contact.classList.add('number');
        const name = document.createElement('label');
        contact.classList.add('name');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('contact_delete');
        deleteButton.innerHTML = 'X';
        number.innerHTML = book[i].number;
        name.innerHTML = book[i].name;
        contact.appendChild(number);
        contact.appendChild(name);
        contact.appendChild(deleteButton);
        book_content.appendChild(contact);
    }
}
async function loginRequest(){
    const answer = await fetch(
        `http://localhost:3000/phoneBook/show`
    );
    const result = await answer.json();
    return result.data;
}
function logout() {
    for(let i = 0; i < unlogged_div.length; i++) unlogged_div[i].classList.remove('hidden');
    for(let i = 0; i < logged_div.length; i++) logged_div[i].classList.add('hidden');
}