const items = [
  { itemName: 'tv', itemPrice: 100 },
  { itemName: 'bike', itemPrice: 100 },
  { itemName: 'car', itemPrice: 1000 },
  { itemName: 'phone', itemPrice: 50 },
  { itemName: 'laptop', itemPrice: 50 },
  { itemName: 'bus', itemPrice: 100 },
  { itemName: 'tab', itemPrice: 30 },
  { itemName: 'pen', itemPrice: 10 },
]

console.log(items.length)

const filteredItems = items.filter((item) => item.itemPrice < 100)

console.log(filteredItems.length)