## Nuxt.js Cryptocurrency Dashboard

### Descrizione del Progetto

Questo progetto è una dashboard di criptovalute sviluppata con Nuxt.js, TypeScript, e Tailwind CSS. Mostra le prime 100 criptovalute ordinate per Market Cap utilizzando le API di CoinMarketCap. La pagina è ottimizzata per i motori di ricerca con contenuti generati server-side (SSR) e caricamento dinamico della tabella client-side con uno spinner di caricamento.

### Funzionalità

- **Server-Side Rendering (SSR)** per ottimizzare la visibilità sui motori di ricerca.
- **Visualizzazione delle criptovalute** con nome, simbolo, prezzo, offerta circolante e ultimo aggiornamento.
- **Aggiornamento dinamico** dei dati delle criptovalute client-side.
- **Utilizzo di Vuex** per la gestione dello stato.
- **Spinner di caricamento** per migliorare l'esperienza utente durante il caricamento dei dati.
- **Notifica di cambiamento del prezzo** di Bitcoin colorando il prezzo di rosso se cambia dall'ultima visita dell'utente.

### Requisiti

- Node.js v14 o superiore
- NPM o Yarn

### Installazione

1. Clonare il repository da GitHub:

   ```bash
   git clone https://github.com/username/nuxt-cryptocurrency-app.git
   cd nuxt-cryptocurrency-app
   ```

2. Installare le dipendenze:

   ```bash
   npm install
   ```

3. Configurare le variabili d'ambiente:

   Creare un file `.env` nella radice del progetto e aggiungere la tua API key di CoinMarketCap:

   ```env
   CMC_API_KEY=your_coinmarketcap_api_key
   ```

### Esecuzione in Locale

Per eseguire il progetto in locale, utilizzare il comando:

```bash
npm run dev
```

### Distribuzione su Vercel o Netlify

#### Distribuzione su Vercel

1. **Installare Vercel CLI** (se non è già installato):

   ```bash
   npm install -g vercel
   ```

2. **Effettuare il login su Vercel**:

   ```bash
   vercel login
   ```

3. **Distribuire il progetto**:

   Nella directory del progetto, eseguire:

   ```bash
   vercel
   ```

   Seguire le istruzioni per configurare il progetto. Assicurarsi di aggiungere la variabile d'ambiente `CMC_API_KEY` su Vercel.

#### Distribuzione su Netlify

1. **Installare Netlify CLI** (se non è già installato):

   ```bash
   npm install -g netlify-cli
   ```

2. **Effettuare il login su Netlify**:

   ```bash
   netlify login
   ```

3. **Distribuire il progetto**:

   Nella directory del progetto, eseguire:

   ```bash
   netlify init
   ```

   Seguire le istruzioni per configurare il progetto. Assicurarsi di aggiungere la variabile d'ambiente `CMC_API_KEY` su Netlify.

4. **Costruire e distribuire il progetto**:

   ```bash
   npm run build
   netlify deploy --prod
   ```

### Struttura del Progetto

```plaintext
components/
  atoms/
    LoadingSpinner.vue
  molecules/
    TableHeader.vue
    TableRow.vue
  organisms/
    CryptocurrencyTable.vue
layouts/
pages/
  index.vue
plugins/
  axios.ts
store/
  index.ts
assets/
  css/
    tailwind.css
nuxt.config.js
tsconfig.json
```
