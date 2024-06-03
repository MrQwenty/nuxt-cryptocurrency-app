<template>
  <tr class="border-b hover:bg-gray-100">
    <td class="py-2 px-4 text-center">{{ crypto.name }}</td>
    <td class="py-2 px-4 text-center">{{ crypto.symbol }}</td>
    <td class="py-2 px-4 text-center">
      {{ formatPrice(crypto.quote.USD.price) }}
    </td>
    <td class="py-2 px-4 text-center">{{ crypto.circulating_supply }}</td>
    <td class="py-2 px-4 text-center">{{ formatDate(crypto.last_updated) }}</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    crypto: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    formatPrice(value: number) {
      return value.toLocaleString("it-IT", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
    formatDate(date: string) {
      return new Date(date).toLocaleString("it-IT");
    },
  },
});
</script>
