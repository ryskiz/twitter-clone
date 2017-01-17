const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank.js');
const routes = require('./routes/');


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.use('/', routes);
nunjucks.configure('views', {noCache:true});
// tweetBank.add('RyanzMaName', 'this is my tweet');

// const locals = {
// 	title: 'An example',
// 	people: tweetBank.list()
// };


// console.log(locals);

// app.get('/', function(req, res, next){
// 	console.log('hello');
// 	console.log(`${req.method} ${req.path}`);
// 	next();
// });
// // document.getElementById('').addEventListener("click", function(){
// // 	console.log("I was clicked");
// // })

// app.get('/news', function(req, res, next){
// 	// var number = req.params.id;
// 	// res.send(`${req.path} This is the number ${number}`)
// 	// nunjucks.render('index.html', locals, function(err,output){
// 	// res.send(output);
// 	// })
// 	res.render('index', locals)
// })

app.listen(3000);