// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Context, Plugin } from '@nuxt/types'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue from 'vue'
import MockRepository from 'repositories/Mock'

type repositoriesT = {
  mock: MockRepository
}

declare module 'vue/types/vue' {
  interface Vue {
    $repositories: repositoriesT
  }
}

declare module '@nuxt/types' {
  interface Context {
    $repositories: repositoriesT
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $repositories: repositoriesT
  }
}

/**
 *
 * @param {Context} ctx
 * @param inject
 */
const plugin: Plugin = (ctx, inject) => {
  const repositories: repositoriesT = {
    mock: new MockRepository(ctx.$services.http),
  }

  inject('repositories', repositories)
}

export default plugin
