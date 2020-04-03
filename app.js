let mongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');

let carsRouter = require('./routes/carsRoute');

let app = express();

let db = mongoose.connection;

password = require('./password');
const url = password;

db.on('error', console.error);
db.once('open', () => {
  console.log('Connected to the productsdb MongoDB database.');
});

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
  });

app.use(bodyParser.json());

app.use('/cars', carsRouter);
