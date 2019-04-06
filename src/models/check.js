export class Check {
  constructor (date, options) {
    this.header = this.fillHeader(date, options)
    this.checkItems = this.items(options)
  }

  fillHeader (date, options) {
    return {
      date: date,
      currency: options.currency,
      sum: options.cart.reduce((sum, item) => sum + item.price * item.count, 0)
    }
  }

  items (options) {
    return options.cart.map((item) => ({
      coffeeId: item.id,
      price: item.price,
      count: item.count,
      sum: item.price * item.count,
      currency: options.currency
    }))
  }
}
