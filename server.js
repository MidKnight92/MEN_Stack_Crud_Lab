const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const PORT = 3000;



app.listen(PORT, () => {
	console.log('Listening on '+ PORT);
})