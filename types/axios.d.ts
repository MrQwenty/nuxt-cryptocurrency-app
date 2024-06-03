// types/axios.d.ts
import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module '@nuxt/types' {
  interface Context {
    $axios: NuxtAxiosInstance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
  }
}
