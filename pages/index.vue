<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">
      Il valore di Bitcoin è ${{ formatPrice(bitcoinPrice) }}
    </h1>
    <p class="mb-8">
      La cryptovaluta con maggior Market Cap dopo Bitcoin è
      {{ topCrypto.name }} con valore ${{
        formatPrice(topCrypto.quote.USD.price)
      }}
    </p>
    <CryptocurrencyTable />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import CryptocurrencyTable from "~/components/organisms/CryptocurrencyTable.vue";

export default defineComponent({
  components: {
    CryptocurrencyTable,
  },
  async asyncData({ store }: any) {
    await store.dispatch("fetchCryptocurrencies");
  },
  computed: {
    ...mapState({
      bitcoinPrice: (state: any) => state.bitcoinPrice,
      topCrypto: (state: any) => state.topCrypto,
    }),
  },
  methods: {
    formatPrice(value: number) {
      return value.toLocaleString("it-IT", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
  },
});
</script>
