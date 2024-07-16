import http from 'node:http';
import fs from 'node:fs/promises';

const config = {
	port: 8000
}

const server = http.createServer(async (req, res) => {
	const {url} = req;
	if (url === '/') {
		const index = await fs.readFile('./index.html', 'utf8');
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.end(index);
	} else if (url === '/style.css') {
			const css = await fs.readFile('./style.css', 'utf8');
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/css; charset=utf-8');
			res.end(css);
	} else {
		const page404 = await fs.readFile('./page404.html', 'utf8');
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.end(page404);
	}
});

server.listen(config.port);