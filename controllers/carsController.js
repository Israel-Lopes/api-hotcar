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
  add: (req, res) => {
    let car = new Car(req.body);
    car.save((err) => {
      if (err) {
        res.status(500);
        res.send('Error : failed to get car...');
      }
      else {
        res.status(201);
        res.send(req.body);
      }
     });
    },

};