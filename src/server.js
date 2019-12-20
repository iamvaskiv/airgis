const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000,
      mongoose = require('mongoose'),
      bodyParser = require('body-parser');

// mongoose instance connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));


app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.listen(port);
