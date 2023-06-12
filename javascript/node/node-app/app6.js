const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');

const index_page = fs.readFileSync('./index.ejs', 'utf8');
const style_css = fs.readFileSync('./style.css', 'utf8');

var server = http.createServer(getFromClient);

server.listen(3000);
console.log('Server start!');

// main program

// create progress
function getFromClient(request, response) {
	var url_parts = url.parse(request.url);
	switch(url_parts.pathname) {

		case '/':
			var content = ejs.render(index_page, {
				title: "Index",
				content: "This sample page is used template",
			});
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.write(content);
			response.end();
			break;

		case '/style.css':
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.write(style_css);
			response.end();
			break;

		default:
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end('no page...');
			break;
	}
}
