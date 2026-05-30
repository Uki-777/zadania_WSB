async function getWeather(latitude = 50.29, longitude = 19.10) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Błąd odpowiedzi serwera");
    }

    const data = await response.json();

    console.log(`Temperatura: ${data.current.temperature_2m} ${data.current_units.temperature_2m}`);
    console.log(`Prędkość wiatru: ${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`);
    console.log(`Współrzędne: ${latitude}, ${longitude}`);
  } catch (error) {
    console.log(`Nie udało się pobrać pogody: ${error.message}`);
  }
}

getWeather();
getWeather(52.23, 21.01);
