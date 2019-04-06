export default {
  SET_COFFEE_LIST: (state, payload) => {
    state.coffeeList = payload
  },
  SET_CARDS_IN_ROW: (state, payload) => {
    state.cardsInRow = payload
    localStorage.setItem('cardsInRow', payload)
  },
  SET_CURRENCY: (state, payload) => {
    state.currency = payload
    localStorage.setItem('currency', payload)
  },
  ADD_TO_CART: (state, payload) => {
    const newItem = payload
    let item = state.cart.find((el) => el.id === newItem.id)
    if (item === undefined) {
      state.cart.push({ ...newItem })
    } else {
      item.count += newItem.count
    }
  },
  SHOW_CART: (state, payload) => {
    state.showCart = payload
  },
  SHOW_SETTINGS: (state, payload) => {
    state.showSettings = payload
  },
  DELETE_CART_ITEM: (state, payload) => {
    state.cart.splice(payload, 1)
  },
  CLEAR_CART: (state, payload) => {
    state.cart = []
  },
  SET_WINDOW_SIZE: (state, payload) => {
    state.window.width = payload.innerWidth
    state.window.height = payload.innerHeight
  }
}
