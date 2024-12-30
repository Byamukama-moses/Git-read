const http = require('http');
const fs = require("fs");
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./view/home.html',
            (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end('Internal server error');
                } else {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(data);
                }
            }
        );
    } else if (req.url === '/about') {
        fs.readFile('./view/about.html',
            (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end('Internal server error');
                } else {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(data);
                }
            }
        );
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 page not found</h1> <p>The page you\'re looking for does not exist.</p>');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
