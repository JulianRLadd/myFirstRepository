console.log("**********SERVER***********")
	const express = require('express');
	const app = express();
	const mongoose  = require ('./server/config/mongoose.js')
	app.use(express.static( __dirname + '/public/dist/public'));
    const bodyParser = require('body-parser')
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
	const Pet = require('./server/models/pet.js')(mongoose)
	require ('./server/config/routes.js')(app)
    
	app.listen(8000, () => console.log("listening on port 8000"));