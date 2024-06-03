import { Plugin } from '@nuxt/types'

const axiosPlugin: Plugin = ({ $axios, env }) => {
  $axios.onRequest(config => {
    config.headers.common['X-CMC_PRO_API_KEY'] = env.CMC_API_KEY
  })
}

export default axiosPlugin

