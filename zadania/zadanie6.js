const movies = [
  { title: "Arrival", category: "sci-fi", rating: 8.1, watched: true },
  { title: "Whiplash", category: "drama", rating: 8.5, watched: false },
  { title: "Dune", category: "sci-fi", rating: 8.0, watched: false },
  { title: "Inside Out", category: "animation", rating: 8.1, watched: true },
  { title: "Interstellar", category: "sci-fi", rating: 8.7, watched: false }
];

const notWatched = movies.filter(movie => !movie.watched);
const highRated = movies.filter(movie => movie.rating > 8.0);
const titlesToWatch = notWatched.map(movie => movie.title);
const sciFiMovies = movies.filter(movie => movie.category === "sci-fi");

console.log("Filmy nieobejrzane:", notWatched);
console.log("Filmy z oceną powyżej 8.0:", highRated);
console.log("Tytuły filmów do obejrzenia:", titlesToWatch);
console.log("Filmy sci-fi:", sciFiMovies);
