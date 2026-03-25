//simple notification system
let notifications = [
  { id: 1, text: "New message", seen: false, type: "msg" },
  { id: 2, text: "Friend request", seen: true, type: "social" }
];

function addNotification(text, type) {
  let n = {
    id: Date.now(),
    text: text,
    seen: false,
    type: type,
    time: new Date().toLocaleTimeString()
  }
  notifications.push(n)
  console.log("new notif added")
}

function markSeen(id) {
  let n = notifications.find(x => x.id == id)
  if (n) {
    n.seen = true
    console.log("marked seen")
  } else {
    console.log("not found")
  }
}

function markAllSeen() {
  for (let i = 0; i < notifications.length; i++) {
    notifications[i].seen = true
  }
  console.log("all marked seen")
}

function deleteNotif(id) {
  let before = notifications.length
  notifications = notifications.filter(n => n.id != id)

  if (before === notifications.length) {
    console.log("nothing deleted")
  } else {
    console.log("deleted")
  }
}

function showAll() {
  console.log("---- NOTIFICATIONS ----")
  for (let i = 0; i < notifications.length; i++) {
    let n = notifications[i]
    let status = n.seen ? "seen" : "new"
    console.log(n.text + " | " + status + " | " + n.type)
  }
}

function showUnseen() {
  let unseen = notifications.filter(n => n.seen == false)
  console.log("---- UNSEEN ----")
  unseen.forEach(n => console.log(n.text))
}

function filterByType(type) {
  let list = notifications.filter(n => n.type == type)
  console.log("---- TYPE:", type, "----")
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].text)
  }
}

function stats() {
  let seen = 0
  let unseen = 0

  for (let i = 0; i < notifications.length; i++) {
    if (notifications[i].seen) {
      seen++
    } else {
      unseen++
    }
  }

  console.log("seen:", seen, "unseen:", unseen)
}

showAll()

addNotification("New like", "social")
addNotification("Update available", "system")

markSeen(notifications[0].id)

showUnseen()

filterByType("social")

stats()

markAllSeen()

deleteNotif(2)

showAll()
