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

var data = { msg: 'no message...' };

// index access progress
function response_index(request, response) {
	//POST access progress
	if (request.method == 'POST') {
		var body = '';

	//Data reception event handing
	request.on('data', (data) => {
		body += data;
	});

	//Data reception end event procession
		request.on('end', () => {
			data = qs.parse(body);
			write_index(request, response);
		});
	}
	else {
		write_index(request, response);
	}
}

function write_index(request, response) {
	var msg = "Display message.";
	var content = ejs.render(index_page, {
		title: "Index",	
		content: msg,
		data: data,
	});
	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.write(content);
	response.end()
}

var data2 = {
  'Taro': ['taro@yamada', '09-999-999', 'Tokyo'],
  'Hanako': ['hanako@flower', '080-888-888', 'Yokohama'],
  'Sachiko': ['sachi@happy', '070-777-777', 'Nagoya'],
  'Ichiro': ['ichi@baseball', '060-666-666', 'USA'],
}

// other$B$N%"%/%;%9=hM}(B
function response_other(request, response) {
  var msg = "This is Other page."
  var content = ejs.render(other_page, {
    title: "Other",
    content: msg,
    data: data2,
    filename: 'data_item'
  });
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(content);
  response.end();
}

