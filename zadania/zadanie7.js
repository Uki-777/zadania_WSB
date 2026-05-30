const repairs = [
  { id: 1, client: "Anna", device: "laptop", status: "nowe" },
  { id: 2, client: "Piotr", device: "telefon", status: "w trakcie" },
  { id: 3, client: "Ola", device: "tablet", status: "zakończone" }
];

const searchedId = 2;
const foundRepair = repairs.find(repair => repair.id === searchedId);

const updatedRepairs = repairs.map(repair =>
  repair.id === 1 ? { ...repair, status: "w trakcie" } : repair
);

const inProgressCount = updatedRepairs.filter(repair => repair.status === "w trakcie").length;

function showRepair(repair) {
  return `${repair.client} - ${repair.device} - ${repair.status}`;
}

console.log("Znalezione zgłoszenie:", foundRepair);
console.log("Oryginalna tablica:", repairs);
console.log("Zaktualizowana tablica:", updatedRepairs);
console.log(`Liczba zgłoszeń w trakcie: ${inProgressCount}`);
console.log("Opis zgłoszenia:", showRepair(foundRepair));
