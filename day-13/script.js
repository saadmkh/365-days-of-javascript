let todos = [
  { id: 1, task: "Learn JavaScript", completed: false },
  { id: 2, task: "Practice coding", completed: true }
];

function showTodos() {
  console.log(todos);
}

function addTodo(task) {
  let newTodo = {
    id: Date.now(),
    task: task,
    completed: false
  };
  todos.push(newTodo);
}

function toggleTodo(id) {
  let todo = todos.find(t => t.id == id);
  if (todo) {
    todo.completed = !todo.completed;
  }
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id != id);
}

function showCompleted() {
  let completed = todos.filter(t => t.completed === true);
  console.log(completed);
}

function showPending() {
  let pending = todos.filter(t => t.completed === false);
  console.log(pending);
}

addTodo("Build a project");
toggleTodo(todos[0].id);
deleteTodo(2);
showTodos();
showCompleted();
showPending();
