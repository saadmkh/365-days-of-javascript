let events = [
  { id: 1, title: "Tech Conference", seats: 50, registered: 20 },
  { id: 2, title: "Music Festival", seats: 100, registered: 75 }
];

function showEvents() {
  console.log(events);
}

function addEvent(title, seats) {
  let newEvent = {
    id: Date.now(),
    title: title,
    seats: seats,
    registered: 0
  };
  events.push(newEvent);
}

function registerUser(id) {
  let event = events.find(e => e.id == id);
  if (event && event.registered < event.seats) {
    event.registered++;
  }
}

function cancelRegistration(id) {
  let event = events.find(e => e.id == id);
  if (event && event.registered > 0) {
    event.registered--;
  }
}

function removeEvent(id) {
  events = events.filter(e => e.id != id);
}

function showFullEvents() {
  let full = events.filter(e => e.registered === e.seats);
  console.log(full);
}

addEvent("Startup Meetup", 30);
registerUser(events[0].id);
registerUser(events[0].id);
cancelRegistration(events[1].id);
removeEvent(2);
showEvents();
showFullEvents();
