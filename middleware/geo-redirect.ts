import axios from 'axios';

export default async function ({ req, redirect }) {
  let countryCode = 'UNKNOWN';

  // Controllo lato server
  if (process.server && req) {
    try {
      // Ottieni l'indirizzo IP dell'utente
      const ipAddress =
        req.headers['x-forwarded-for'] || req.connection.remoteAddress || '0.0.0.0';

      // Rimuovi eventuali prefissi IPv6
      const cleanIp = ipAddress.toString().replace(/^::ffff:/, '');

      // Chiamata a un servizio di geolocalizzazione (es. ip-api.com)
      const response = await axios.get(`http://ip-api.com/json/${cleanIp}`);
      countryCode = response.data.countryCode || 'UNKNOWN';
    } catch (error) {
      if (error instanceof Error) {
        console.error('Errore durante la geolocalizzazione:', error.message);
      } else {
        console.error('Errore durante la geolocalizzazione:', error);
      }
    }
  }

  // Reindirizza se l'utente non è in Italia
  if (countryCode !== 'IT') {
    return redirect('/accesso-negato');
  }
}
