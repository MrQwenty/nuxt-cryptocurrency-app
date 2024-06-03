<template>
  <div>
    <div v-if="loading" class="text-center my-8">
      <LoadingSpinner />
    </div>
    <div v-else>
      <table class="min-w-full bg-white border border-gray-200">
        <TableHeader />
        <tbody>
          <TableRow
            v-for="(crypto, index) in cryptocurrencies"
            :key="crypto.id"
            :crypto="crypto"
            :index="index + 1"
          />
        </tbody>
      </table>
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
    this.loading = false;
  },
});
</script>
