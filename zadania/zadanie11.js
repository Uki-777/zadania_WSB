const tripCosts = [
  { label: "nocleg", amount: 420, paidBy: "Anna" },
  { label: "paliwo", amount: 260, paidBy: "Piotr" },
  { label: "jedzenie", amount: 180, paidBy: "Anna" },
  { label: "bilety", amount: 140, paidBy: "Ola" }
];

const totalCost = tripCosts.reduce((sum, cost) => sum + cost.amount, 0);

const costsPerPerson = tripCosts.reduce((result, cost) => {
  result[cost.paidBy] = (result[cost.paidBy] || 0) + cost.amount;
  return result;
}, {});

const topPayer = Object.entries(costsPerPerson).reduce((top, current) =>
  current[1] > top[1] ? current : top
);

const people = Object.keys(costsPerPerson);
const costPerPerson = totalCost / people.length;

const settlements = people.map(person => {
  const paid = costsPerPerson[person];
  const balance = paid - costPerPerson;
  return {
    person,
    paid,
    balance: Number(balance.toFixed(2)),
    message: balance >= 0
      ? `${person} powinien otrzymać ${balance.toFixed(2)} zł`
      : `${person} powinien oddać ${Math.abs(balance).toFixed(2)} zł`
  };
});

console.log(`Całkowity koszt wyjazdu: ${totalCost} zł`);
console.log("Koszty per osoba:", costsPerPerson);
console.log(`Najwięcej zapłacił/a: ${topPayer[0]} - ${topPayer[1]} zł`);
console.log("Rozliczenie:", settlements);
