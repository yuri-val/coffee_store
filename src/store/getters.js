export default {
  COFFEE_LIST: state => state.coffeeList,
  CARDS_IN_ROW: state => state.cardsInRow,
  CART: state => state.cart,
  CART_COUNT: state => state.cart.reduce((count, item) => count + item.count, 0),
  CART_SUM: state => state.cart.reduce((sum, item) => sum + item.price * item.count, 0),
  SHOW_CART: state => state.showCart,
  WINDOW: state => state.window
}
