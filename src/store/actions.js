import coffee from '@/api/coffee'
import checks from '@/api/checks'

import { Check } from '@/models/check'

export default {
  GET_COFFEE_LIST: async (context, payload) => {
    const { data } = await coffee.index()
    context.commit('SET_COFFEE_LIST', data)
  },
  SAVE_CARDS_IN_ROW: (context, payload) => {
    let cardsCount = payload
    if (cardsCount < 2) cardsCount = 2
    if (cardsCount > 6) cardsCount = 6
    context.commit('SET_CARDS_IN_ROW', cardsCount)
  },
  SHOW_CART: (context, payload) => {
    context.commit('SHOW_CART', payload)
  },
  ADD_TO_CART: (context, payload) => {
    context.commit('ADD_TO_CART', payload)
  },
  DELETE_CART_ITEM: (context, payload) => {
    context.commit('DELETE_CART_ITEM', payload)
  },
  SAVE_CHECK: async (context, payload) => {
    const newCheck = new Check(new Date(), payload)
    const { data } = await checks.create(newCheck.header)
    newCheck.checkItems.forEach((item) => checks.createItem(data.id, item))
    context.commit('CLEAR_CART', data)
  },
  SET_WINDOW_SIZE: (context, payload) => {
    context.commit('SET_WINDOW_SIZE', payload)
  }
}
