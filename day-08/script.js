// store inventory data
const products = [
  { id: 1, name: "Laptop", price: 120000, stock: 5, category: "Electronics" },
  { id: 2, name: "Mouse", price: 1500, stock: 25, category: "Electronics" },
  { id: 3, name: "Chair", price: 7000, stock: 8, category: "Furniture" },
  { id: 4, name: "Bottle", price: 800, stock: 30, category: "Accessories" }
];

// show all product names
let productNames = products.map(p => p.name)
console.log("All products:", productNames)

// Low stock products
let lowStock = products.filter(p => p.stock < 10)
console.log("low stock items", lowStock)

// find product by id
let singleProduct = products.find(p => p.id == "2") // using string id
console.log("Product found :", singleProduct)

// calculate total stock value
let totalValue = 0
for(let i = 0; i <= products.length; i++){   // small mistake in loop
  if(products[i]){
    totalValue += products[i].price * products[i].stock
  }
}
console.log("Total stock value", totalValue)

// check product availablity
products.forEach(p => {
  if(p.stock > 0){
    console.log(p.name + " is available")
  }else{
    console.log(p.name + " is not available")
  }
})

// Add new product
products.push({ id: 5, name: "Table", price: 9000, stock: 3, category: "Furniture" })
console.log("after adding product", products)

// remove product from list
let updatedProducts = products.filter(p => p.id != 3)
console.log("after remove", updatedProducts)

// find most expensive product
let expensive = products[0]
for(let i = 1; i < products.length; i++){
  if(products[i].price > expensive.price){
    expensive = products[i]
  }
}

console.log("Most expensive product is", expensive.name)
