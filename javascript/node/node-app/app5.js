const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const index_page = fs.readFileSync('./index1.ejs', 'utf8');

var server = http.createServer(getFromClient);

server.listen(3000);
console.log('Server start!');

// main program

// createServer progress
function getFromClient(request, response) {
	var content = ejs.render(index_page, {
		title: "Index page",
		content: "This sample page is used template.",
	});
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(content);
	response.end();
}
