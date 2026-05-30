const shoppingList = [
  { name: "chleb", quantity: 2, urgent: true },
  { name: "mleko", quantity: 1, urgent: false },
  { name: "jajka", quantity: 10, urgent: true },
  { name: "makaron", quantity: 3, urgent: false },
  { name: "woda", quantity: 6, urgent: true }
];

console.log("Pełna lista zakupów:");
shoppingList.forEach(product => {
  console.log(`- ${product.name}, ilość: ${product.quantity}`);
});

const urgentProducts = shoppingList.filter(product => product.urgent);
const upperCaseNames = shoppingList.map(product => product.name.toUpperCase());

console.log(`Liczba pilnych produktów: ${urgentProducts.length}`);
console.log("Pilne produkty:", urgentProducts);
console.log("Nazwy produktów wielkimi literami:", upperCaseNames);

const manyItems = shoppingList.filter(product => product.quantity > 2);
console.log("Produkty z ilością większą niż 2:", manyItems);
