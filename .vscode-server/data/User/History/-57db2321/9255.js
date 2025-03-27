console.log('My code is running')
//retrieve to do from local storage or init empty array

let todo = JSON.parse(localStorage.getItem('todo')) || [];
const todoInput = document.getElementById('todoInput');

console.log(todoInput)