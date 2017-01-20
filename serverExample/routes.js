'use strict';

var fs = require('fs');
var renderEngine = require('./renderEngine.js');

var urls = ['/','/user'];


function indexRoute (req, res) {
	if(req.url == '/' && req.method =='GET') {
		renderEngine.render('index',{},res);
	}
}

function userRoute (req,res, user) {
	if(req.url =='/user') {
		renderEngine.render('user', user,res);
	}
}

function notFound(req, res) {
	console.log('not Found');
	if(urls.indexOf(req.url) < 0 ) {
		fs.readFile('./notFound.html', (err,data)=> {
			if(err) throw err;
			res.write(data);
			res.end();
		});
	}
}

module.exports.indexRoute = indexRoute;
module.exports.userRoute = userRoute;
module.exports.notFound = notFound;
