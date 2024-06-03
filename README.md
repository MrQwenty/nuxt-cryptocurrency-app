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

### Risposte alle Domande

1. **Organizzazione del Progetto in Nuxt:**

   - **Struttura del progetto:** Utilizzare una struttura basata sull'atomic design per migliorare la manutenibilità e la riusabilità dei componenti.
   - **Funzionalità da utilizzare:** Utilizzare SSR per la generazione lato server per la SEO, e Vuex per gestire lo stato dell'applicazione.

2. **Hosting Serverless:**

   - **Funzionalità di Nuxt:** Utilizzare `nuxt build` e `nuxt start` per avviare l'applicazione in modalità serverless.
   - **Accorgimenti:** Configurare le variabili d'ambiente correttamente e considerare l'utilizzo di `nuxt generate` per un sito statico.

3. **Visibilità ai Robots:**

   - **Configurazione Nuxt:** Assicurarsi di usare SSR e configurare i meta tag SEO nel file `nuxt.config.js`.

4. **Avviso sul Cambio di Prezzo:**

   - **Funzionalità di Vue.js:** Utilizzare Vuex per mantenere lo stato del prezzo precedente e watchers per monitorare i cambiamenti e colorare il prezzo di rosso.

5. **Visualizzazione agli Utenti Italiani:**

   - **Funzionalità di Nuxt:** Utilizzare middleware per controllare la geolocalizzazione dell'IP e mostrare la pagina solo agli utenti italiani.

6. **Cache della Tabella:**
   - **Soluzione:** Utilizzare un plugin o middleware per gestire la cache delle risposte API e configurare la cache per 5 minuti.
