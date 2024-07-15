import http from 'node:http';
import fs from 'node:fs/promises';

const config = {
	port: 8000
}

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	res.end('hello world!');
})

server.listen(config.port);