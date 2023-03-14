import { MutationTree, GetterTree } from 'vuex'

export const state = () => ({
  items: [],
})

export type stateT = ReturnType<typeof state>

export const namespaced = true

export const mutations: MutationTree<stateT> = {
  setItems(state, payload) {
    state.items = payload
  },
}

export const getters: GetterTree<stateT, stateT> = {
  items(state) {
    return state.items
  },
}
