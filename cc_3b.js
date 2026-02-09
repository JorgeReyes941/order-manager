// I chose to go with clothes and things of that nature to keep it simple as possible
let inventory = [
{
    sku: "SKU_001",
    name: "Hoodie",
    price: 45,
    stock: 6
},

{
    sku: "SKU_002",
    name: "Shoes",
    price: 90,
    stock: 4
},

{
    sku: "SKU_003",
    name: "Socks",
    price: 3,
    stock: 20
},

{
    sku: "SKU_004",
    name: "Jeans",
    price: 8,
    stock: 10
},

];

inventory.forEach(item => {
  console.log(`${item.sku} | ${item.name} | ${item.price} | ${item.stock} in stock`);
});

// this next line should add a new product to the inventory 
inventory.push({
    sku: "SKU_005",
    name: "Jacket",
    price: 80,
    stock: 4

});

// this line should remove the last product because of the .pop()
let removedItem = inventory.pop();
console.log("Removed product: " + removedItem.name);

inventory[0].price = 40;
inventory[1].stock = inventory[1].stock + 3;

inventory.forEach(item => {
  console.log(`${item.sku} | ${item.name} | ${item.price} | ${item.stock}`);
});

// step 4 create and process order 

let orders = [
  {
    orderId: "order_001",
    items: [
      { sku: "SKU_001", quantity: 1 },
      { sku: "SKU_003", quantity: 4 }
    ]
  },
  {
    orderId: "order_002",
    items: [
      { sku: "SKU_002", quantity: 2 }
    ]
  }
];

orders.forEach(order => {
  console.log("Processing " + order.orderId);

  order.items.forEach(item => {
    let product = null;

    inventory.forEach(p => {
      if (p.sku === item.sku) {
        product = p;
      }
    });

    if (product) {
      if (product.stock >= item.quantity) {
        product.stock -= item.quantity;
        console.log(
          "Fulfilled " +
          item.quantity +
          " of " +
          product.name +
          ". Remaining stock: " +
          product.stock
        );
      } else {
        console.log(
          "Not enough stock for " +
          product.name +
          ". Requested: " +
          item.quantity +
          ", Available: " +
          product.stock
        );
      }
    } else {
      console.log("Product with SKU " + item.sku + " not found");
    }
  });
});

// step 5 reporting and the insights of this 

let totalValue = inventory.reduce((sum, item) => {
  return sum + item.price * item.stock;
}, 0);

console.log("Total inventory value: " + totalValue);

let lowStockItems = inventory.filter(item => {
  return item.stock <= 5;
});

lowStockItems.forEach(item => {
  console.log(item.name + " is low on stock");
});

let priceList = inventory.map(item => {
  return item.sku + " $" + item.price;
});

console.log(priceList);


