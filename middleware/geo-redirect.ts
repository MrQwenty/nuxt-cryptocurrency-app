import axios from 'axios';

export default async function ({ req, redirect }) {
  let countryCode = 'UNKNOWN';

  // Controllo lato server
  if (process.server && req) {
    try {
      // Ottieni l'indirizzo IP dell'utente
      const ipAddress =
        req.headers['x-forwarded-for'] || req.connection.remoteAddress || '0.0.0.0';

      console.log('Indirizzo IP originale:', ipAddress);

      // Rimuovi eventuali prefissi IPv6
      const cleanIp = ipAddress.toString().replace(/^::ffff:/, '');
      console.log('Indirizzo IP pulito:', cleanIp);

      // Verifica l'host della richiesta
      const host = req.headers.host || '';
      console.log('Host della richiesta:', host);

      // Consenti sempre l'accesso su localhost e su Vercel
      if (
        cleanIp === '127.0.0.1' || // localhost IPv4
        cleanIp === '::1' || // localhost IPv6
        host.includes('vercel.app') // Dominio Vercel
      ) {
        console.log('Accesso consentito su localhost o Vercel');
        countryCode = 'IT'; // Simula l'Italia su localhost o Vercel
      } else {
        // Chiamata al servizio di geolocalizzazione (esempio: ip-api.com)
        const response = await axios.get(`http://ip-api.com/json/${cleanIp}`);
        console.log('Risposta geolocalizzazione:', response.data);
        countryCode = response.data.countryCode || 'UNKNOWN';
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Errore durante la geolocalizzazione:', error.message);
      } else {
        console.error('Errore durante la geolocalizzazione:', error);
      }

      // In caso di errore, consenti l'accesso per evitare blocchi
      countryCode = 'IT'; // Simula l'Italia in caso di errore
    }
  }

  // Reindirizza se l'utente non è in Italia
  if (countryCode !== 'IT') {
    console.log('Accesso negato: non in Italia');
    return redirect('/accesso-negato');
  }

  console.log('Accesso consentito: utente in Italia');
}
