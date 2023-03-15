import { MutationTree, GetterTree } from 'vuex'

export const state = () => ({
  list: [] as Number[],
})

export type stateT = ReturnType<typeof state>

export const namespaced = true

export const mutations: MutationTree<stateT> = {
  setList(state, payload) {
    state.list = [...state.list, payload]
  },
}

export const getters: GetterTree<stateT, stateT> = {
  list(state) {
    return state.list
  },
}
