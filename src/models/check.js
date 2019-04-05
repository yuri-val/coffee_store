export class Check {
  constructor (date, cart) {
    this.header = this.fillHeader(date, cart)
    this.checkItems = this.items(cart)
  }

  fillHeader (date, cart) {
    return {
      date: date,
      sum: cart.reduce((sum, item) => sum + item.price * item.count, 0)
    }
  }

  items (cart) {
    return cart.map((item) => ({
      coffeeId: item.id,
      price: item.price,
      count: item.count,
      sum: item.price * item.count
    }))
  }
}
