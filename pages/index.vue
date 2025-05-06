<template>
  <div class="p-8">
    <h1 class="mb-4 text-2xl font-bold">
      Il valore di Bitcoin è
      <span
        :class="{
          'text-red-500': bitcoinPriceChanged && bitcoinPrice < previousPrice,
          'text-green-700': bitcoinPriceChanged && bitcoinPrice > previousPrice,
        }"
      >
        ${{ formatPrice(bitcoinPrice) }}
      </span>
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
import { mapState } from "vuex";
import CryptocurrencyTable from "~/components/organisms/CryptocurrencyTable.vue";

export default defineComponent({
  components: {
    CryptocurrencyTable,
  },
  //middleware: ["geo-redirect"], // Applica il middleware
  async asyncData({ store }: any) {
    await store.dispatch("fetchCryptocurrencies");
  },
  data() {
    return {
      previousPrice: 0, // Memorizza il prezzo precedente lato client
    };
  },
  computed: {
    ...mapState({
      bitcoinPrice: (state: any) => state.bitcoinPrice,
      topCrypto: (state: any) => state.topCrypto,
    }),
    bitcoinPriceChanged(): boolean {
      return (
        this.previousPrice !== 0 && this.previousPrice !== this.bitcoinPrice
      );
    },
  },
  mounted() {
    // Accedi a localStorage solo lato client
    if (process.client) {
      const storedPrice = parseFloat(
        localStorage.getItem("bitcoinPrice") || "0"
      );
      this.previousPrice = storedPrice;

      // Salva il prezzo attuale in localStorage
      if (this.bitcoinPrice) {
        localStorage.setItem("bitcoinPrice", this.bitcoinPrice.toString());
      }
    }
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
