// flight booking data
const flights = [
  { id: 1, from: "Karachi", to: "Dubai", price: 45000, seats: 5, status: "on time" },
  { id: 2, from: "Lahore", to: "Istanbul", price: 95000, seats: 2, status: "delayed" },
  { id: 3, from: "Islamabad", to: "Doha", price: 65000, seats: 0, status: "cancelled" },
  { id: 4, from: "Karachi", to: "Jeddah", price: 70000, seats: 9, status: "on time" }
];

// show all DESTINATIONS
let destinations = flights.map(f => f.to)
console.log("All destinations:", destinations)

// available flights
let availableFlights = flights.filter(f => f.seats > 0)
console.log("available flights", availableFlights)

// find flight by id
let oneFlight = flights.find(f => f.id == "2") // using string
console.log("Flight found :", oneFlight)

// calculate total revenue if all seats sold
let totalRevenue = 0
for(let i = 0; i <= flights.length; i++){   // small loop mistake
  if(flights[i]){
    totalRevenue += flights[i].price * flights[i].seats
  }
}
console.log("Total revenue", totalRevenue)

// check flight STATUS
flights.forEach(f => {
  if(f.status === "on time"){
    console.log(f.from + " to " + f.to + " is on time")
  }else{
    console.log(f.from + " to " + f.to + " has issue")
  }
})

// Add new flight
flights.push({ id: 5, from: "Lahore", to: "Baku", price: 55000, seats: 4, status: "on time" })
console.log("after adding new flight", flights)

// remove cancelled flight
let updatedFlights = flights.filter(f => f.id != 3)
console.log("after remove flight", updatedFlights)

// find most expensive flight
let expensiveFlight = flights[0]
for(let i = 1; i < flights.length; i++){
  if(flights[i].price >= expensiveFlight.price){ // equal case replace
    expensiveFlight = flights[i]
  }
}

console.log("Most expensive flight is", expensiveFlight.to)
