const schedule = [
  { day: "poniedziałek", subject: "Programowanie", room: "A12", online: false },
  { day: "wtorek", subject: "Bazy danych", room: "online", online: true },
  { day: "czwartek", subject: "Grafika", room: "B03", online: false },
  { day: "piątek", subject: "UX", room: "online", online: true }
];

function getLessonsByDay(day) {
  return schedule.filter(lesson => lesson.day.toLowerCase() === day.toLowerCase());
}

function formatLessons(lessons) {
  return lessons.map(lesson => {
    const mode = lesson.online ? "online" : "stacjonarne";
    return `${lesson.subject} — sala: ${lesson.room} — tryb: ${mode}`;
  });
}

function getLessonsByMode(online) {
  return schedule.filter(lesson => lesson.online === online);
}

const selectedDay = "wtorek";
const lessonsForDay = getLessonsByDay(selectedDay);

console.log(`Liczba wszystkich zajęć w tygodniu: ${schedule.length}`);
console.log(`Zajęcia w dzień: ${selectedDay}`);
console.log(formatLessons(lessonsForDay));
console.log("Zajęcia online:", formatLessons(getLessonsByMode(true)));
console.log("Zajęcia stacjonarne:", formatLessons(getLessonsByMode(false)));
