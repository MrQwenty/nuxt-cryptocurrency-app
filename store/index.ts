import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  cryptocurrencies: [] as any[],
  bitcoinPrice: null as number | null,
  previousBitcoinPrice: null as number | null, // Nuovo stato per il prezzo precedente
  topCrypto: null as any | null,
  cacheTimestamp: null as number | null, // Timestamp per la cache
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_CRYPTOCURRENCIES(state, data: any[]) {
    state.cryptocurrencies = data
  },
  SET_BITCOIN_PRICE(state, price: number) {
    state.previousBitcoinPrice = state.bitcoinPrice; // Salva il prezzo attuale come precedente
    state.bitcoinPrice = price
  },
  SET_TOP_CRYPTO(state, crypto: any) {
    state.topCrypto = crypto
  },
  SET_CACHE_TIMESTAMP(state, timestamp: number) {
    state.cacheTimestamp = timestamp
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchCryptocurrencies({ commit, state }) {
    const cacheDuration = 5 * 60 * 1000; // 5 minuti in millisecondi

    const now = Date.now()

    // Controlla se i dati sono in cache e validi
    if (state.cacheTimestamp && now - state.cacheTimestamp < cacheDuration) {
      console.log('Dati della tabella caricati dalla cache')
      return
    }

    // Effettua la chiamata API se i dati non sono in cache o sono scaduti
    const response = await this.$axios.$get('cryptocurrency/listings/latest', {
      params: {
        start: 1,
        limit: 100,
        convert: 'USD'
      }
    })

    commit('SET_CRYPTOCURRENCIES', response.data)
    commit('SET_CACHE_TIMESTAMP', now) // Aggiorna il timestamp della cache
    console.log('Dati della tabella aggiornati dalla chiamata API')

    const bitcoin = response.data.find((crypto: any) => crypto.symbol === 'BTC')
    commit('SET_BITCOIN_PRICE', bitcoin.quote.USD.price)
    const topCrypto = response.data.find((crypto: any) => crypto.symbol !== 'BTC')
    commit('SET_TOP_CRYPTO', topCrypto)
  }
}

