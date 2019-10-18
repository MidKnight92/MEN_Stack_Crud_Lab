const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const PORT = 3000;

app.get('/dogs/new', (req, res) => {
	res.render('new.ejs');
})

app.post('/dogs/', (req, res) => {
	console.log(req.body);
})

app.put('/dogs/:id', (req, res) => {
	
})








app.listen(PORT, () => {
	console.log('Listening on '+ PORT);
})