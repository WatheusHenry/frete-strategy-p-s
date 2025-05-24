const ShippingContext = require('../src/ShippingContext');
const FreeShipping = require('../src/strategies/FreeShipping');
const EconomicShipping = require('../src/strategies/EconomicShipping');
const ExpressShipping = require('../src/strategies/ExpressShipping');

describe('Shipping Strategies', () => {
  it('should return 0 for free shipping', () => {
    const context = new ShippingContext(new FreeShipping());
    expect(context.calculateShipping(100)).toBe(0);
  });

  it('should return 5 for economic shipping (5%)', () => {
    const context = new ShippingContext(new EconomicShipping());
    expect(context.calculateShipping(100)).toBe(5);
  });

  it('should return 20 for express shipping (20%)', () => {
    const context = new ShippingContext(new ExpressShipping());
    expect(context.calculateShipping(100)).toBe(20);
  });
});
