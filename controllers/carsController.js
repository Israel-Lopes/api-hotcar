let Car = require('../models/carsModel');

module.exports = {
  get: (req,res) => {
    Car.find((err, cars) => {
      if (err) {
        res.status(500);
        res.send("Internal server error");
      }
      else {
        res.status(200);
        res.send(cars);
      }
    });
  },

  getById: (req, res) => {
    Car.findById(req.params.id, (err, car) => {
      if (err) {
        res.status(404);
        res.send("Car not fould...");
      }
      else {
        res.status(200);
        console.log('');
        res.send(car);
      }
    });
  },

  add: (req, res) => {
    let car = new Car(req.body);
    car.save((err) => {
      if (err) {
        res.status(500);
        res.send('Error : failed to get car...');
      }
      else {
        res.status(201);
        console.log(req.body);
        res.send(req.body);
      }
     });
    },
};
