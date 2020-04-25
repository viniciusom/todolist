var ul = document.querySelector('#list');
var input = document.querySelector('#input');
var button = document.querySelector('#button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  ul.innerHTML = '';

  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);
    var buttonList = document.createElement('button');
    var buttonText = document.createTextNode('Excluir');

    var pos = todos.indexOf(todo);
    buttonList.setAttribute('onclick', 'deleteTodo('+pos+')');

    ul.appendChild(todoElement);
    todoElement.appendChild(todoText);
    todoElement.appendChild(buttonList);
    buttonList.appendChild(buttonText);
  }
}

renderTodos();

function addTodo() {
  var inputText = input.value;

  todos.push(inputText);
  input.value = '';
  renderTodos();
  saveToStorage();
}

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

button.onclick = addTodo;

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}