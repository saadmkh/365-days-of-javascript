let orders = [
  { id: 1, userId: 101, items: [{name:"Laptop", price:1000, quantity:1}], status: "pending", total:1000 },
  { id: 2, userId: 102, items: [{name:"Shirt", price:50, quantity:2}], status: "pending", total:100 },
  { id: 3, userId: 101, items: [{name:"Phone", price:500, quantity:1}], status: "shipped", total:500 },
  { id: 4, userId: 103, items: [{name:"Shoes", price:120, quantity:1}], status: "pending", total:120 },
];

function processOrders(orders) {
    return orders.map(m => {
        if(m.total > 500){
            {...m , total , m.total - 200}
            
// to install cloud code 
//curl -fsSL https://claude.ai/install.sh | bash
        }
    })

}

let discount = processOrders(orders)

console.log(discount);


