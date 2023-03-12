// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Context, Plugin } from '@nuxt/types'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue from 'vue'
import HttpClient from 'services/HttpClient'
import ErrorHandler from 'services/ErrorHandler'

type servicesT = {
  http: HttpClient
  errors: ErrorHandler
}

declare module 'vue/types/vue' {
  interface Vue {
    $services: servicesT
  }
}

declare module '@nuxt/types' {
  interface Context {
    $services: servicesT
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $services: servicesT
  }
}

/**
 *
 * @param {Context} ctx
 * @param inject
 */
const plugin: Plugin = (ctx, inject) => {
  const services: servicesT = {
    http: new HttpClient(ctx.$axios),
    errors: new ErrorHandler(ctx.error),
  }

  inject('services', services)
}

export default plugin
