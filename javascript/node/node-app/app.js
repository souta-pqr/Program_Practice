const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');

const index_page = fs.readFileSync('./index.ejs', 'utf-8');
const other_page = fs.readFileSync('./other.ejs', 'utf-8');
const style_css = fs.readFileSync('./style.css', 'utf-8');

var server = http.createServer(getFromClient);

server.listen(3000);
console.log('server start!');

// main program

// createServer progress
function getFromClient(request, response) {

	var url_parts = url.parse(request.url, true);
	switch(url_parts.pathname) {
		case '/':
			var content = "This is Index page."
			var query = url_parts.query;
			if (query.msg != undefined) {
				content += 'you [' + query.msg + '] send.';
		}
		var content = ejs.render(index_page, {
			title: "Index",
			content: content,
		});
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.write(content);
		response.end();
		break;

	default:
		response.writeHead(200, { 'Content-Type': 'text/plane' });
		response.end('no page...');
		break;
	}
}
