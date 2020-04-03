let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const carAttributes = {
  image: String,
  id: String,
  name: String,
  price: String,
  km: String,
  year: String
};

const CarSchema = new Schema({
  brand: {
    audi:         [carAttributes],
    chevrolet:    [carAttributes],
    fiat:         [carAttributes],
    ford:         [carAttributes],
    honda:        [carAttributes],
    hyundai:      [carAttributes],
    jeep:         [carAttributes],
    mercedesbenz: [carAttributes],
    nissan:       [carAttributes],
    toyota:       [carAttributes],
    volkswagen:   [carAttributes]
  }
});
 
module.exports = mongoose.model('Car', CarSchema);