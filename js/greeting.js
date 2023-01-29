const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const todosForm = document.getElementById("todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "useranme";
function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  // greeting.innerText = "Hello " + username;
  localStorage.setItem("USERNAME_KEY", username);
  paintGreeting(username);
}

function paintGreeting(useranme) {
  greeting.innerText = `Hello!\n ${useranme}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todosForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreeting(savedUsername);
}
