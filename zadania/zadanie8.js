const grades = [3.0, 4.0, 5.0, 3.5, 4.5];
const passLevel = 3.0;

function analyzeGrades(grades) {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  const average = sum / grades.length;
  const status = average >= passLevel ? "zaliczone" : "niezaliczone";

  let classification;
  if (average >= 4.75) {
    classification = "bardzo dobry";
  } else if (average >= 4.0) {
    classification = "dobry";
  } else if (average >= 3.0) {
    classification = "dostateczny";
  } else {
    classification = "niedostateczny";
  }

  return {
    average: Number(average.toFixed(2)),
    status,
    classification
  };
}

console.log("Wynik studenta:", analyzeGrades(grades));
