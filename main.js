//Use an array to keep track of the todos
const todos = [];

function addTodo() {
    const input = document.getElementById("new-todo");
    const value = input.value.trim();
    if (value) {
        todos.push(value);
        input.value = "";
        renderTodos();
    }
}

function renderTodos() {
    const list = document.getElementById("todo-list");
    const template = todos.map(function(todo) {
        return "<li>" + todo + "</li>";
    }).join("");
    list.innerHTML = template;
}

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    addTodo();
});
