/*  FETCH DATA  */

// En funktion som henter produkter fra en server
export async function fetchReviews() {
  try {
    // Forsøger at hente data fra API'et (serverens URL)
    const response = await fetch("https://glamping-rqu9j.ondigitalocean.app/reviews");

    // Konverterer svaret fra API'et til JSON-format
    const data = await response.json();

    return data.data;
  } catch (error) {
    // Hvis der sker en fejl, så kommer fejlen i konsollen
    console.error("Error fetching or parsing data:", error);

    // Returnerer en tom liste, så programmet ikke går ned
    return [];
  }
}



export async function fetchStays() {
  try {
    // Forsøger at hente data fra API'et (serverens URL)
    const response = await fetch(
      "https://glamping-rqu9j.ondigitalocean.app/stays/"
    );

    // Konverterer svaret fra API'et til JSON-format
    const data = await response.json();

    return data.data;
  } catch (error) {
    // Hvis der sker en fejl, så kommer fejlen i konsollen
    console.error("Error fetching or parsing data:", error);

    // Returnerer en tom liste, så programmet ikke går ned
    return [];
  }
}
