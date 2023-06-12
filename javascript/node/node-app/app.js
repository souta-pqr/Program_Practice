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

// index$B$N%"%/%;%9=hM}(B
function response_index(request, response) {
  // POST$B%"%/%;%9;~$N=hM}(B
  if (request.method == 'POST') {
    var body = '';

    // $B%G!<%?<u?.$N%$%Y%s%H=hM}(B
    request.on('data', (data) => {
      body += data;
    });

    // $B%G!<%?<u?.=*N;$N%$%Y%s%H=hM}(B
    request.on('end', () => {
      data = qs.parse(body);
      // $B%/%C%-!<$NJ]B8(B
      setCookie('msg', data.msg, response);
      write_index(request, response);
    });
  } else {
    write_index(request, response);
  }
}

// index$B$N%Z!<%8:n@.(B
function write_index(request, response) {
  var msg = "Display message"
  var cookie_data = getCookie('msg', request);
  var content = ejs.render(index_page, {
    title: "Index",
    content: msg,
    data: data,
    cookie_data: cookie_data,
  });
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(content);
  response.end();
}

// $B%/%C%-!<$NCM$r@_Dj(B
function setCookie(key, value, response) {
  var cookie = escape(value);
  response.setHeader('Set-Cookie', [key + '=' + cookie]);
}
// $B%/%C%-!<$NCM$r<hF@(B
function getCookie(key, request) {
  var cookie_data = request.headers.cookie != undefined ?
    request.headers.cookie : '';
  var data = cookie_data.split(';');
  for (var i in data) {
    if (data[i].trim().startsWith(key + '=')) {
      var result = data[i].trim().substring(key.length + 1);
      return unescape(result);
    }
  }
  return '';
}
