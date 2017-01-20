const http = require ('http');
const fs = require ('fs');



const hostname = "127.0.0.1";
const port = 3000;

const routes = require ('./routes.js');

var user = {
	name: 'alex'
}

const server = http.createServer ((req , res) => {
	
	routes.indexRoute(req,res);
	routes.userRoute(req, res, user);

	routes.notFound (req,res);
});

server.listen(port, hostname, ()=> {
	console.log(`Server running at http://${hostname}:${port}`);
})