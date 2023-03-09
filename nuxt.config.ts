import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    typescript: {
        shim: false
    },
    buildModules: [
        '@nuxtjs/google-fonts'
    ],
    alias: {
        store: resolve(__dirname, './store'),
        components: resolve(__dirname, './components'),
    }
}
