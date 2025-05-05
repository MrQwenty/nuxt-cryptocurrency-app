<template>
  <div>
    <!-- Loading spinner con messaggio -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-12">
      <LoadingSpinner />
      <p class="mt-4 text-gray-600">Caricamento dati in corso...</p>
    </div>

    <!-- Tabella dati -->
    <div v-else-if="cryptocurrencies && cryptocurrencies.length > 0">
      <table class="min-w-full bg-white border border-gray-200">
        <TableHeader />
        <tbody>
          <TableRow
            v-for="(crypto, index) in cryptocurrencies"
            :key="crypto.id || index"
            :crypto="crypto"
            :index="index + 1"
          />
        </tbody>
      </table>
    </div>

    <!-- Messaggio quando non ci sono dati -->
    <div v-else class="my-8 text-center text-gray-500">
      <p>Nessuna criptovaluta disponibile</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import LoadingSpinner from "~/components/atoms/LoadingSpinner.vue";
import TableHeader from "~/components/molecules/TableHeader.vue";
import TableRow from "~/components/molecules/TableRow.vue";

export default defineComponent({
  components: {
    LoadingSpinner,
    TableHeader,
    TableRow,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState({
      cryptocurrencies: (state: any) => state.cryptocurrencies,
    }),
  },
  mounted() {
    this.loading = true;
    this.$store
      .dispatch("fetchCryptocurrencies")
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
});
</script>
