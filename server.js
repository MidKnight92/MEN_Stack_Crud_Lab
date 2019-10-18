const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 3000;


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

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.get('dogs/new', (req, res) => {
	res.render('new.ejs');
})

// // app.post('/', (req, res) => {
// 	console.log(req.body);
// })

app.put('/dogs/:id', (req, res) => {
	console.log(req.body, 'contents of the form');
})

app.post('/dogs', (err, createdDog) => {
	console.log(createdDog);
	res.redirect('/dogs')
} )

app.get('dogs/:id', (req, res) => {
	res.render('show.ejs');
	res.redirect('/dogs');
})

app.get('/dogs', (req, res) => {
	res.render('index.ejs')
})

app.delete('/:id', (req, res) => {
	
	Dogs.deleteOne({_id: req.params.id}, (err, response) => {
		if(err){
			res.send(err);
		} else {
			console.log(response);
			res.redirect('/dogs')
		}
	})
})




app.listen(PORT, () => {
	console.log('Listening on '+ PORT);
})