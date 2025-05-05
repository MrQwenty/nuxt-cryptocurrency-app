const axios = require("axios");

module.exports = async function (req, res) {
  try {
    // Ottieni l'indirizzo IP dell'utente
    const ipAddress =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      "0.0.0.0";

    console.log("Indirizzo IP rilevato:", ipAddress);

    // Rimuovi eventuali prefissi IPv6
    const cleanIp = ipAddress.toString().replace(/^::ffff:/, "");

    // Chiamata al servizio di geolocalizzazione (esempio: ip-api.com)
    const response = await axios.get(`http://ip-api.com/json/${cleanIp}`);

    const countryCode = response.data.countryCode || "UNKNOWN";

    if (countryCode !== "IT") {
      return redirect("/accesso-negato");
    }

    // Restituisci il codice del paese
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        countryCode: countryCode,
        countryName: response.data.country || "UNKNOWN",
      })
    );
  } catch (error) {
    console.error(
      "Errore durante il controllo della geolocalizzazione:",
      error.message
    );

    // In caso di errore, restituisci un messaggio di errore
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        error: "Errore durante il controllo della geolocalizzazione",
        message: error.message,
      })
    );
  }
};
