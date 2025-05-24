const ShippingContext = require('./ShippingContext');
const FreeShipping = require('./strategies/FreeShipping');
const EconomicShipping = require('./strategies/EconomicShipping');
const ExpressShipping = require('./strategies/ExpressShipping');

const context = new ShippingContext(new FreeShipping());
console.log('Frete grátis:', context.calculateShipping(100));

context.setStrategy(new EconomicShipping());
console.log('Frete econômico:', context.calculateShipping(100));

context.setStrategy(new ExpressShipping());
console.log('Frete expresso:', context.calculateShipping(100));
