const tasks = ["zajęcia", "zakupy", "trening"];

function createDayPlan(name, tasks = ["odpoczynek"]) {
  const numberedTasks = tasks.map((task, index) => `${index + 1}. ${task}`);
  return `Plan dnia dla ${name}. Liczba zadań: ${tasks.length}. Zadania: ${numberedTasks.join(", ")}.`;
}

console.log(createDayPlan("Łukasz", tasks));
console.log(createDayPlan("Anna", ["praca", "nauka JavaScript", "spacer"]));
console.log(createDayPlan("Piotr"));
