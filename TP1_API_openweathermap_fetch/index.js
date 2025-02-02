// Exemple de code pour faire une requête API en utilisant la librairie 'request'

const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL =
  "http://api.openweathermap.org/data/2.5/weather?appid=" +
  API_KEY +
  "&units=metric&lang=fr&q=";

async function getWeatherData(city) {
  const url = BASE_URL + city;
  try {
    const response = await fetch(url); // Appel à l'API avec fetch
    if (!response.ok) {
      // Vérifie si la réponse est correcte
      throw new Error("Erreur lors de la requête : " + response.status);
    }
    const weatherData = await response.json(); // Parse les données JSON
    return weatherData;
  } catch (error) {
    console.error("Erreur:", error);
    return null;
  }
}

getWeatherData("sousse").then((data) => {
  if (data) {
    console.log("Discription : ", data.weather[0].description);
    console.log("Temperature : ", data.main.temp);
    console.log("Humidity : ", data.main.humidity);
  } else {
    console.log("Erreur lors de la récupération des données.");
  }
});
