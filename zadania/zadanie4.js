const hasLaptop = true;
const hasCharger = false;
const hasNotebook = true;
const hasStudentCard = true;
const dayType = "laboratorium";

if (hasLaptop && hasNotebook && hasStudentCard) {
  console.log("Student ma podstawowe rzeczy na zajęcia.");
} else {
  console.log("Student nie ma wszystkich podstawowych rzeczy.");
}

const readyMessage = hasLaptop && hasNotebook ? "Gotowy na zajęcia." : "Niegotowy na zajęcia.";
console.log(readyMessage);

!hasCharger && console.log("Ostrzeżenie: brakuje ładowarki.");

if (dayType === "laboratorium") {
  console.log("Dzisiaj jest laboratorium, laptop jest szczególnie ważny.");
} else {
  console.log("Dzisiaj jest wykład, wystarczy notatnik lub laptop.");
}

hasStudentCard && console.log("Legitymacja zabrana.");
