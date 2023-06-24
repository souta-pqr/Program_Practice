const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');
const qs = require('querystring');

const index_page = fs.readFileSync('./index.ejs', 'utf8');
const login_page = fs.readFileSync('./login.ejs', 'utf8');

const max_num = 10; // $B:GBgJ]4I?t(B
const filename = 'mydata.txt'; // $B%G!<%?%U%!%$%kL>(B
var message_data; // $B%G!<%?(B
readFromFile(filename);

var server = http.createServer(getFromClient);

server.listen(3000);
console.log('Server start!');

// $B$3$3$^$G%a%$%s%W%m%0%i%`(B==========

// createServer$B$N=hM}(B
function getFromClient(request, response) {

  var url_parts = url.parse(request.url, true);
  switch (url_parts.pathname) {

    case '/': // $B%H%C%W%Z!<%8!J%a%C%;!<%8%\!<%I!K(B
      response_index(request, response);
      break;

    case '/login': // $B%m%0%$%s%Z!<%8(B
      response_login(request, response);
      break;

    default:
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('no page...');
      break;
  }
}

// login$B$N%"%/%;%9=hM}(B
function response_login(request, response) {
  var content = ejs.render(login_page, {});
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(content);
  response.end();
}

// index$B$N%"%/%;%9=hM}(B
function response_index(request, response) {
  // POST$B%"%/%;%9;~$N=hM}(B
  if (request.method == 'POST') {
    var body = '';

    // $B%G!<%?<u?.$N%$%Y%s%H=hM}(B
    request.on('data', function (data) {
      body += data;
    });

    // $B%G!<%?<u?.=*N;$N%$%Y%s%H=hM}(B
    request.on('end', function () {
      data = qs.parse(body);
      addToData(data.id, data.msg, filename, request);
      write_index(request, response);
    });
  } else {
    write_index(request, response);
  }
}

// index$B$N%Z!<%8:n@.(B
function write_index(request, response) {
  var msg = "please enter some messages.";
  var content = ejs.render(index_page, {
    title: 'Index',
    content: msg,
    data: message_data,
    filename: 'data_item',
  });
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(content);
  response.end();
}

// $B%F%-%9%H%U%!%$%k$r%m!<%I(B
function readFromFile(fname) {
  fs.readFile(fname, 'utf8', (err, data) => {
    message_data = data.split('\n');
  })
}

// $B%G!<%?$r99?7(B
function addToData(id, msg, fname, request) {
  var obj = { 'id': id, 'msg': msg };
  var obj_str = JSON.stringify(obj);
  console.log('add data: ' + obj_str);
  message_data.unshift(obj_str);
  if (message_data.length > max_num) {
    message_data.pop();
  }
  saveToFile(fname);
}

// $B%G!<%?$rJ]B8(B
function saveToFile(fname) {
  var data_str = message_data.join('\n');
  fs.writeFile(fname, data_str, (err) => {
    if (err) { throw err; }
  });
}

