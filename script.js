const http = require('http');
const path = require('path');
const fs = require('fs');

const users = [
  {id: 1, name: 'John Doe'},
  {id: 2, name: 'Jane Doe'},
]

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
      try {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(content)
      } catch (err) {
        console.log("error:", err.message);
        res.writeHead(500);
        res.end('Server Error')
      }
    });
  }
  if (req.url === '/about') {
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
      try {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(content)
      } catch (err) {
        console.log("error:", err.message);
        res.writeHead(500);
        res.end('Server Error')
      }
    });
  }

  if (req.url === '/api/users') {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(users))
  }
});

const port = process.env.PORT || 5000

server.listen(port, () => console.log(`Server is running on port ${port}`))