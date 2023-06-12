const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');

const index_page = fs.readFileSync('./index2.ejs', 'utf8');
const other_page = fs.readFileSync('./other.ejs', 'utf8'); //$B!zDI2C(B
const style_css = fs.readFileSync('./style.css', 'utf8');

var server = http.createServer(getFromClient);

server.listen(3000);
console.log('Server start!');

// $B$3$3$^$G%a%$%s%W%m%0%i%`(B==========

// createServer$B$N=hM}(B
function getFromClient(request, response) {

  var url_parts = url.parse(request.url);
  switch (url_parts.pathname) {

    case '/':
      var content = ejs.render(index_page, {
        title: "Index",
        content: "$B$3$l$O(BIndex$B%Z!<%8$G$9!#(B",
      });
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(content);
      response.end();
      break;

    case '/other': //$B!zDI2C(B
      var content = ejs.render(other_page, {
        title: "Other",
        content: "$B$3$l$O?7$7$/MQ0U$7$?%Z!<%8$G$9!#(B",
      });
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(content);
      response.end();
      break;

    default:
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('no page...');
      break;
  }
}
