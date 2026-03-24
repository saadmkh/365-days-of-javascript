//simple chat message system
let messages = [
  { id: 1, user: "Ali", text: "hello", read: false },
  { id: 2, user: "Sara", text: "hi", read: true }
];

function sendMessage(user, text) {
  let msg = {
    id: Date.now(),
    user: user,
    text: text,
    read: false,
    time: new Date().toLocaleTimeString()
  }
  messages.push(msg)
  console.log("message sent")
}

function readMessage(id) {
  let m = messages.find(x => x.id == id)
  if (m) {
    m.read = true
    console.log("marked as read")
  }
}

function deleteMessage(id) {
  let before = messages.length
  messages = messages.filter(m => m.id != id)

  if (before === messages.length) {
    console.log("no message deleted")
  } else {
    console.log("message deleted")
  }
}

function showAll() {
  console.log("---- CHAT ----")
  for (let i = 0; i < messages.length; i++) {
    let m = messages[i]
    let status = m.read ? "read" : "unread"
    console.log(m.user + ": " + m.text + " (" + status + ")")
  }
}

function showUnread() {
  let unread = messages.filter(m => m.read == false)
  console.log("---- UNREAD ----")
  unread.forEach(m => console.log(m.user + ": " + m.text))
}

function searchMessage(word) {
  let found = messages.filter(m => m.text.includes(word))
  if (found.length > 0) {
    console.log("found messages:")
    found.forEach(m => console.log(m.text))
  } else {
    console.log("nothing found")
  }
}

function stats() {
  let read = 0
  let unread = 0

  for (let i = 0; i < messages.length; i++) {
    if (messages[i].read) {
      read++
    } else {
      unread++
    }
  }

  console.log("read:", read, "unread:", unread)
}

showAll()

sendMessage("Ahmed", "how are you")
sendMessage("Ali", "lets meet")

readMessage(messages[0].id)

showUnread()

searchMessage("hi")

stats()

deleteMessage(2)

showAll()
