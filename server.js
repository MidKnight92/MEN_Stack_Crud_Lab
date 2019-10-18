const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 3000;

app.get('dogs/new', (req, res) => {
	res.render('new.ejs');
})

app.post('/dogs/', (req, res) => {
	console.log(req.body);
})

app.put('/dogs/:id', (req, res) => {
	
})


const connectionString = ('mongodb://localhost/dogs');

mongoose.connect(connectionString, { 
	useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
	console.log(`Mongoose connected to ${connectionString}`);
})

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose is disconnected`);
});

mongoose.connection.on('error', (err) => {
  console.log(err, 'mongoose error');
});


const dogSchema = new mongoose.Schema({
	dog_name: {type: String required: true},
	dog_breed: {type: String required: true}
});

const Dog = mongoose.model('Dog', dogSchema);




app.listen(PORT, () => {
	console.log('Listening on '+ PORT);
})