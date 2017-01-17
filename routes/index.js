const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
  next();
});

router.get('/stylesheets/style.css', function(req, res){
	res.sendFile('/Users/comet81/Desktop/Fullstack/twitter-js/public/stylesheets/style.css');
});

module.exports = router;