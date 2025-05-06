import axios from 'axios';

export default async function ({ req, redirect }) {
  let countryCode = 'UNKNOWN';

  if (process.server && req) {
    try {
      const host = req.headers.host || '';
      const forwarded = req.headers['x-forwarded-for'];
      const ip = Array.isArray(forwarded)
        ? forwarded[0]
        : (forwarded || '').split(',')[0].trim() || req.connection.remoteAddress;

      const cleanIp = ip.toString().replace(/^::ffff:/, '');

      const isLocal = ['127.0.0.1', '::1'].includes(cleanIp);
      const isVercel = host.includes('.vercel.app');

      if (isLocal || isVercel) {
        countryCode = 'IT';
      } else {
        const response = await axios.get(`http://ip-api.com/json/${cleanIp}`);
        if (response.data && response.data.status === 'success') {
          countryCode = response.data.countryCode;
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Errore geolocalizzazione:', error.message);
      } else {
        console.error('Errore geolocalizzazione:', error);
      }
      countryCode = 'IT'; // fallback
    }
  }

  if (countryCode !== 'IT') {
    return redirect('/accesso-negato');
  }
}
