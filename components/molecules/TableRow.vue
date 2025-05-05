<template>
  <tr class="border-b hover:bg-gray-100">
    <td class="px-4 py-2 text-center">{{ crypto.name }}</td>
    <td class="px-4 py-2 text-center">{{ crypto.symbol }}</td>
    <td class="px-4 py-2 text-center">
      $
      {{ formatPrice(crypto.quote.USD.price) }}
    </td>
    <td class="px-4 py-2 text-center">
      {{ formatCirculatingSupply(crypto.circulating_supply) }}
    </td>
    <td class="px-4 py-2 text-center">{{ formatDate(crypto.last_updated) }}</td>
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
    formatCirculatingSupply(value: number) {
      // Formatta il numero senza decimali e con separatori delle migliaia
      return Math.floor(value).toLocaleString("en-US", {
        maximumFractionDigits: 0,
      });
    },
    formatDate(date: string) {
      const dateObj = new Date(date);

      // Array dei giorni della settimana in inglese
      const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      // Array dei mesi in inglese
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const weekday = weekdays[dateObj.getDay()];
      const day = dateObj.getDate();
      const month = months[dateObj.getMonth()];

      // Formato ora 12h con AM/PM
      let hours = dateObj.getHours();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // l'ora '0' dovrebbe essere '12'
      const minutes = dateObj.getMinutes().toString().padStart(2, "0");

      // Formatta la data nel formato richiesto
      return `${weekday} ${day} ${month}, ${hours}:${minutes}${ampm}`;
    },
  },
});
</script>
