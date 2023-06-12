const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');
const qs = require('querystring');

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
			response_index(request, response);
			break;
	
		case '/other':
			response_other(request, response);
			break;

		case 'style.css':
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.write(style_css);
			response.end();
			break;

		default:
			response.writeHead(200, { 'Content-Type': 'text/plane' });
			response.end('no page...');
			break;
	}
}

var data = {
  'Taro': '09-999-999',
  'Hanako': '080-888-888',
  'Sachiko': '070-777-777',
  'Ichiro': '060-666-666'
};

// indexのアクセス処理
function response_index(request, response) {
  var msg = "This is Index page."
  var content = ejs.render(index_page, {
    title: "Index",
    content: msg,
    data: data,
	filename: 'data_item'
  });
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(content);
  response.end();
}

function response_other(request, response) {
	var msg = "This is Other page.";

	// POST access progress
	if (request.method == 'POST') {
		var body = '';

	// When Received data, event progress
	request.on('data', (data) => {
		body += data;
	});

	// When stopping Received data, event progress
	request.on('end', () => {
		var post_data = qs.parse(body);
		msg += 'You [' + post_data.msg + '] wrote';
		var content = ejs.render(other_page, {
			title: "Other",
			content: msg,
		});
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.write(content);
		response.end();
	});

	// GET aceess progress
	}
	else {
		var msg = "no page...";
		var content = ejs.render(other_page, {
			title: "Other",
			content: msg,
		});
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.write(content);
		response.end();
	}
}
