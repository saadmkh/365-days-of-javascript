let cart = [
  { name: "T-shirt", price: 20, quantity: 2 },
  { name: "Shoes", price: 50, quantity: 1 },
  { name: "Cap", price: 10, quantity: 3 }
];

function calculateTotal(items) {
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }

  return total;
}

function showItems(items) {
  items.forEach(item => {
    console.log(item.name + " x" + item.quantity);
  });
}

function findExpensiveItem(items) {
  let expensive = items[0];

  for (let i = 1; i < items.length; i++) {
    if (items[i].price > expensive.price) {
      expensive = items[i];
    }
  }

  return expensive;
}

showItems(cart);

let totalPrice = calculateTotal(cart);
console.log("Total:", totalPrice);

let expensiveItem = findExpensiveItem(cart);
console.log("Most expensive:", expensiveItem.name);
