let todos = [
  { id: 1, text: "study js", done: false },
  { id: 2, text: "go gym", done: true }
];

function addTodo(txt) {
  let newTodo = {
    id: Date.now(),
    text: txt,
    done: false,
    created: new Date().toLocaleTimeString()
  }
  todos.push(newTodo)
  console.log("added:", txt)
}

function markDone(id) {
  let t = todos.find(x => x.id == id)
  if (t) {
    t.done = true
    console.log("marked done")
  } else {
    console.log("not found")
  }
}

function markUndone(id) {
  let t = todos.find(x => x.id == id)
  if (t) {
    t.done = false
    console.log("marked undone")
  }
}

function toggleTodo(id) {
  let t = todos.find(x => x.id == id)
  if (t) {
    t.done = !t.done
    console.log("toggled:", t.text)
  }
}

function deleteTodo(id) {
  let before = todos.length
  todos = todos.filter(t => t.id != id)

  if (before == todos.length) {
    console.log("nothing deleted")
  } else {
    console.log("deleted todo")
  }
}

function editTodo(id, newText) {
  let t = todos.find(x => x.id == id)
  if (t) {
    t.text = newText
    console.log("updated text")
  }
}

function listTodos() {
  console.log("---- ALL TODOS ----")
  for (let i = 0; i < todos.length; i++) {
    let t = todos[i]
    let status = t.done ? "✓" : "x"
    console.log(t.id + " | " + t.text + " | " + status + " | " + t.created)
  }
}

function showCompleted() {
  console.log("---- COMPLETED ----")
  let done = todos.filter(t => t.done == true)
  done.forEach(t => console.log(t.text))
}

function showPending() {
  console.log("---- PENDING ----")
  let p = todos.filter(t => t.done == false)
  for (let i = 0; i < p.length; i++) {
    console.log(p[i].text)
  }
}

function clearDone() {
  todos = todos.filter(t => t.done == false)
  console.log("cleared completed")
}

function stats() {
  let done = 0
  let pending = 0

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].done) {
      done++
    } else {
      pending++
    }
  }

  console.log("stats -> done:", done, "pending:", pending)
}

function findTodo(text) {
  let found = todos.filter(t => t.text.includes(text))
  if (found.length > 0) {
    console.log("found:")
    found.forEach(t => console.log(t.text))
  } else {
    console.log("no match")
  }
}

listTodos()

addTodo("learn arrays")
addTodo("build project")
addTodo("read docs")

markDone(todos[0].id)
toggleTodo(todos[1].id)

editTodo(todos[2].id, "read js docs")

showCompleted()
showPending()

stats()

findTodo("read")

deleteTodo(2)

clearDone()

listTodos()
