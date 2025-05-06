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

      // Consenti sempre l'accesso su localhost e sul dominio specifico di Vercel
      if (
        cleanIp === '127.0.0.1' || // localhost IPv4
        cleanIp === '::1' || // localhost IPv6
        host === 'nuxt-cryptocurrency-app.vercel.app' // Dominio specifico di Vercel
      ) {
        console.log('Accesso consentito su localhost o dominio Vercel');
        countryCode = 'IT'; // Simula l'Italia su localhost o dominio Vercel
      } else if (req.headers['x-forwarded-for']) {
        // Chiamata al servizio di geolocalizzazione con l'IP reale dell'utente
        const realIp = req.headers['x-forwarded-for'].split(',')[0].trim();
        console.log('Indirizzo IP reale:', realIp);

        const response = await axios.get(`http://ip-api.com/json/${realIp}`);
        console.log('Risposta geolocalizzazione:', response.data);
        countryCode = response.data.countryCode || 'UNKNOWN';

        // Se il dominio è Vercel e il paese è "US", consenti l'accesso
        if (host === 'nuxt-cryptocurrency-app.vercel.app' && countryCode === 'US') {
          console.log('Accesso consentito per dominio Vercel anche se il paese è US');
          countryCode = 'IT'; // Simula l'Italia per Vercel
        }
      } else {
        console.log('Impossibile determinare l\'IP reale, accesso negato.');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Errore durante la geolocalizzazione:', error.message);
      } else {
        console.error('Errore durante la geolocalizzazione:', error);
      }

      // Consenti l'accesso in caso di errore
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
