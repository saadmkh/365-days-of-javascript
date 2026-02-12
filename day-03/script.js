let users = [
  { id: 1, name: "John", isOnline: false, points: 10 },
  { id: 2, name: "Jane", isOnline: true, points: 20 },
  { id: 3, name: "Mike", isOnline: false, points: 5 }
];

//toggle user
function toggleUser(id){

    return users.map(m=> 
        m.id === id ?
        {...m , isOnline:  !m.isOnline}: m
    )
}

let id = toggleUser(2)


//increase user points
function increacePoints(id ,  amount){

    return users.map(m=>
        m.id === id?
        {...m , points: m.points+amount} : m
    )
}
let inc = increacePoints(1 , 5)

//remove user from array 

function removeUser(id){
    return users.filter(f=>
        f.id !== id
    )

}
let remove = removeUser(2)
console.log(remove);


//add new user without mutating 

function addUser(newUser){
    return [...users , newUser]

}

let user = addUser({id:4 , name:'king' , isOnline : true , points:30})


//false all online users
function setAllOffline(){
    return users.map(m=> ({
        ...m, isOnline : false
    }))
}

