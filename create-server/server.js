import http from 'node:http';
import fs from 'node:fs/promises';

const config = {
	port: 8000
}

const server = http.createServer(async (req, res) => {
	const file = await fs.readFile('./index.html', 'utf8');
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	res.end(file);
})

server.listen(config.port);