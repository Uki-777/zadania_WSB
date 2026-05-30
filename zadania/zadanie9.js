const cart = [
  { name: "Chleb", price: 4.5, quantity: 2 },
  { name: "Ser", price: 9.9, quantity: 1 },
  { name: "Sok", price: 6.2, quantity: 3 }
];

const discountThreshold = 30;
const discountPercent = 10;

const itemDescriptions = cart.map(item => `${item.quantity} × ${item.name}`);
const itemValues = cart.map(item => ({
  ...item,
  value: item.price * item.quantity
}));

const total = itemValues.reduce((sum, item) => sum + item.value, 0);

let finalPrice = total;
if (total > discountThreshold) {
  finalPrice = total - total * discountPercent / 100;
}

const deliveryCost = finalPrice > 40 ? 0 : 9.99;

console.log("Opis pozycji:", itemDescriptions);
console.log(`Suma przed rabatem: ${total.toFixed(2)} zł`);
console.log(`Suma po rabacie: ${finalPrice.toFixed(2)} zł`);
console.log(`Koszt dostawy: ${deliveryCost.toFixed(2)} zł`);
console.log(`Razem do zapłaty: ${(finalPrice + deliveryCost).toFixed(2)} zł`);
