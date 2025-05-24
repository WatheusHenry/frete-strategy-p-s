class ShippingContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculateShipping(price) {
    return this.strategy.calculate(price);
  }
}
module.exports = ShippingContext;
