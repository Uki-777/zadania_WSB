const user = {
  firstName: "Łukasz",
  lastName: "Nowak",
  city: "Katowice",
  age: 21,
  fieldOfStudy: "informatyka"
};

console.log(`${user.firstName} ${user.lastName}`);
console.log(`Użytkownik mieszka w mieście ${user.city} i studiuje kierunek ${user.fieldOfStudy}.`);

const ageMessage = user.age >= 18 ? "Użytkownik jest pełnoletni." : "Użytkownik nie jest pełnoletni.";
console.log(ageMessage);

user.favoriteLanguage = "JavaScript";
console.log(`Ulubiony język programowania użytkownika to ${user.favoriteLanguage}.`);
