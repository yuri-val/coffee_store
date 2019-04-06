export default {
  coffeeList: [],
  cardsInRow: parseInt(localStorage.getItem('cardsInRow') || 4),
  currency: localStorage.getItem('currency') || 'грн.',
  cart: [],
  showCart: false,
  showSettings: false,
  window: {
    width: 0,
    height: 0
  }
}
