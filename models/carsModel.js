let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const carAttributesSchema = new Schema({
  image: String,
  name: String,
  price: String,
  km: String,
  year: String
});


const audiSchema = new Schema({
  audi: [carAttributesSchema]
});
const chevroletSchema = new Schema({
  chevrolet: [carAttributesSchema]
});
const fiatSchema = new Schema({
  fiat: [carAttributesSchema]
});
const fordSchema = new Schema({
  ford: [carAttributesSchema]
});
const hondaSchema = new Schema({
  honda: [carAttributesSchema]
});
const hyundaiSchema = new Schema({
  hyundai: [carAttributesSchema]
});
const jeepSchema = new Schema({
  jeep: [carAttributesSchema]
});
const mercedesbenzSchema = new Schema({
  mercedesbenz: [carAttributesSchema]
});
const nissanSchema = new Schema({
  nissan: [carAttributesSchema]
});
const toyotaSchema = new Schema({
  toyota: [carAttributesSchema]
});
const volkswagenSchema = new Schema({
  volkswagen: [carAttributesSchema]
});

/*
const carSchema = new Schema({
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
});*/

const carSchema = new Schema({
  audiSchema,
  chevroletSchema,
  fiatSchema,
  fordSchema,
  hondaSchema,
  hyundaiSchema,
  jeepSchema,
  mercedesbenzSchema,
  nissanSchema,
  toyotaSchema,
  volkswagenSchema
});
/*
mongoose.model('Audi', audiSchema);
mongoose.model('Chevrolet', audiSchema);
mongoose.model('Fiat', audiSchema);
mongoose.model('Ford', audiSchema);
mongoose.model('Honda', audiSchema);
mongoose.model('Hyundai', audiSchema);
mongoose.model('Jeep', audiSchema);
mongoose.model('Mercedesbenz', audiSchema);
mongoose.model('Nissan', audiSchema);
mongoose.model('Toyota', audiSchema);
mongoose.model('Volkswagen', audiSchema);
*/
module.exports = mongoose.model('Car', carSchema);
