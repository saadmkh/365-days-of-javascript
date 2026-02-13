const users = [
  { id: 1, name: "alex", age: 19, active: true },
  { id: 2, name: "sem", age: 25, active: false },
  { id: 3, name: "jordan", age: 30, active: true },
  { id: 4, name: "samsa", age: 17, active: true }
];



const result = users
  .filter(user => user.active).filter(user => user.age >= 18).map(user => user.name).sort();                              

console.log(result);


function isAdult(user) {
  return user.age >= 18;
}

const processedUsers = users
  .filter(user => user.active)
  .filter(isAdult)
  .map(user => ({
    ...user,
    status: "virefied"
  }));

console.log(processedUsers);