const express = require('express');
const app = express();


app.get('/', function(req, res, next){
	res.send('hello');
})











app.listen(3000);