const API_KEY = "DRK1eDLEzQBT9X5Wcrjdv5yulkiq5DfyZFH1h7Xz";
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

async function fetchNasaData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erreur lors de la requête : " + response.status);
    }
    const data = await response.json();
    console.log("Données de la NASA:", data);
    console.log("Image du jour:", data.url);
    console.log("Explication:", data.explanation);
  } catch (error) {
    console.error("Erreur lors de la requête API:", error);
  }
}

fetchNasaData();
