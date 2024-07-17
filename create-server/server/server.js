import http from 'node:http';
import fs from 'node:fs/promises';

const config = {
	port: 8000
}

const server = http.createServer(async (req, res) => {
	const {url} = req;
	if (url === '/') {
		const index = await fs.readFile('./client/index.html', 'utf8');
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.end(index);
	} else if (url === '/client/style.css') {
			const css = await fs.readFile('./client/style.css', 'utf8');
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/css; charset=utf-8');
			res.end(css);
	}else if (url === '/client/cat.jpg') {
		const css = await fs.readFile('./client/cat.jpg');
		res.statusCode = 200;
		res.setHeader('Content-Type', 'image/png');
		res.end(css);
	}	else {
		const page404 = await fs.readFile('./client/page404.html', 'utf8');
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.end(page404);
	}
});

server.listen(config.port);