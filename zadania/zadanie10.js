const activities = [
  { type: "bieg", minutes: 35, calories: 320 },
  { type: "rower", minutes: 50, calories: 410 },
  { type: "spacer", minutes: 20, calories: 90 },
  { type: "siłownia", minutes: 60, calories: 450 }
];

const totalMinutes = activities.reduce((sum, activity) => sum + activity.minutes, 0);
const totalCalories = activities.reduce((sum, activity) => sum + activity.calories, 0);
const longActivities = activities.filter(activity => activity.minutes > 30);

const mostCaloric = activities.reduce((best, activity) =>
  activity.calories > best.calories ? activity : best
);

console.log(`Łączny czas aktywności: ${totalMinutes} minut.`);
console.log(`Łączna liczba spalonych kalorii: ${totalCalories} kcal.`);
console.log(`Liczba aktywności dłuższych niż 30 minut: ${longActivities.length}.`);
console.log("Dłuższe aktywności:", longActivities);
console.log(`Najbardziej kaloryczny trening: ${mostCaloric.type}, ${mostCaloric.calories} kcal.`);
