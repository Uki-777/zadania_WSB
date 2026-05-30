const expenses = [18.5, 42, 9.99, 27, 61.3, 15, 33.5];

const total = expenses.reduce((sum, expense) => sum + expense, 0);
const average = total / expenses.length;
const maxExpense = Math.max(...expenses);

const budgetLimit = 200;
const budgetStatus = total <= budgetLimit ? "Budżet nie został przekroczony." : "Budżet został przekroczony.";

console.log("Raport budżetu tygodniowego:");
console.log(`Suma wydatków: ${total.toFixed(2)} zł`);
console.log(`Średni wydatek: ${average.toFixed(2)} zł`);
console.log(`Największy wydatek: ${maxExpense.toFixed(2)} zł`);
console.log(budgetStatus);
