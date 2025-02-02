// Exemple de code pour faire une requête API en utilisant la librairie 'request'
const axios = require("axios");
const API_KEY = "DRK1eDLEzQBT9X5Wcrjdv5yulkiq5DfyZFH1h7Xz";
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
async function fetchNasaData() {
  try {
    // Requête GET avec Axios
    const response = await axios.get(url);

    // Afficher les données reçues
    console.log("Données de la NASA:", response.data);

    // Exemple d'affichage de l'URL de l'image
    console.log("Image du jour:", response.data.url);
    console.log("Explication:", response.data.explanation);
  } catch (error) {
    console.error("Erreur lors de la requête API:", error);
  }
}

// Appel de la fonction pour tester
fetchNasaData();
