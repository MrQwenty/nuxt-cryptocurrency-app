import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  cryptocurrencies: [] as any[],
  bitcoinPrice: null as number | null,
  topCrypto: null as any | null
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_CRYPTOCURRENCIES(state, data: any[]) {
    state.cryptocurrencies = data
  },
  SET_BITCOIN_PRICE(state, price: number) {
    state.bitcoinPrice = price
  },
  SET_TOP_CRYPTO(state, crypto: any) {
    state.topCrypto = crypto
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchCryptocurrencies({ commit }) {
    const response = await this.$axios.$get('cryptocurrency/listings/latest', {
      params: {
        start: 1,
        limit: 100,
        convert: 'USD'
      }
    })
    commit('SET_CRYPTOCURRENCIES', response.data)
    const bitcoin = response.data.find((crypto: any) => crypto.symbol === 'BTC')
    commit('SET_BITCOIN_PRICE', bitcoin.quote.USD.price)
    const topCrypto = response.data.find((crypto: any) => crypto.symbol !== 'BTC')
    commit('SET_TOP_CRYPTO', topCrypto)
  }
}

