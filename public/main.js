//Логин и регистрация
const login_input = document.getElementById("login_input");
const password_input = document.getElementById("password_input");
const login_button = document.getElementById("login_button");
const register_button = document.getElementById("register_button");
//Для входа и выхода
const unlogged_div = document.getElementsByClassName("unlogged");
const logged_div = document.getElementsByClassName("logged");
//Содержание записной книжки
const book_content = document.getElementById("book_content");
//Приколы
const login_text = document.getElementById("login_text");
const logout_button = document.getElementById("logout_button");
//Для добавления контакта
const number_input = document.getElementById("number_input");
const name_input = document.getElementById("name_input");
const publish_number = document.getElementById("publish_number");

let actual_login = "";

login_button.addEventListener("click", login);
register_button.addEventListener("click", registrationRequest);
publish_number.addEventListener('click', publish);
logout_button.addEventListener("click", logout);

async function login() {
  if (login_input.value === "" || password_input.value === "") return;
  loginRequest().then((value) => {
    if (value.result === "ok") {
      actual_login = login_input.value;
      login_text.innerHTML = "Привет, " + actual_login;
      for (let i = 0; i < unlogged_div.length; i++)
        unlogged_div[i].classList.add("hidden");
      for (let i = 0; i < logged_div.length; i++)
        logged_div[i].classList.remove("hidden");
      localStorage.setItem('user_id', value.data.id);
      getBookRequest().then((answer) => {
        if (answer.result === "ok") {
          createContacts(answer.data);
        }
      });
    }
  });
}
function createContacts(book) {
  for (let i = 0; i < book.length; i++) {
    const contact = document.createElement("div");
    contact.classList.add("contact");
    contact.setAttribute("id", i);
    const number = document.createElement("label");
    contact.classList.add("number");
    const name = document.createElement("label");
    contact.classList.add("name");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("contact_delete");
    deleteButton.innerHTML = "X";
    number.innerHTML = book[i].number;
    name.innerHTML = book[i].name;
    deleteButton.addEventListener('click', () => deleteContact(book[i].number));
    contact.appendChild(number);
    contact.appendChild(name);
    contact.appendChild(deleteButton);
    book_content.insertBefore(contact, book_content.firstChild);
  }
}
async function getBookRequest() {
  const answer = await fetch(`http://localhost:3000/book/show/${localStorage.getItem('user_id')}`);
  const result = await answer.json();
  return result;
}
async function loginRequest() {
  const answer = await fetch(
    `http://localhost:3000/users/login/${login_input.value}/${password_input.value}`
  );
  const result = await answer.json();
  return result;
}
async function registrationRequest() {
  if (login_input.value === "" || password_input.value === "") return;
  console.log('ya huesos');
  const answer = await fetch(
    `http://localhost:3000/users/registration/${login_input.value}/${password_input.value}`
  );
  const result = await answer.json();
  return result;
}
function logout() {
  for (let i = 0; i < unlogged_div.length; i++)
    unlogged_div[i].classList.remove("hidden");
  for (let i = 0; i < logged_div.length; i++)
    logged_div[i].classList.add("hidden");
}
async function publish() {
  if (number_input.value === "" || name_input.value === "") return;
  await fetch(`http://localhost:3000/add/registration/${localStorage.getItem('user_id')}/${number_input.value}/${name_input.value}`);
}
async function deleteContact(number) {
    await fetch(`http://localhost:3000/add/registration/${localStorage.getItem('user_id')}/${number}`);
}
