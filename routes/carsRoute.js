let express = require('express');
let carsRouter = express.Router();

let carsController = require('../controllers/carsController');

carsRouter.route('')
  .get(carsController.get)
  .post(carsController.add);

carsRouter.route('/:id')
  .get(carsController.getById);

module.exports = carsRouter; 
