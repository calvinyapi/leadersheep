
const http = require('http');
const app = require('./index');

app.set('port', process.env.PORT || 3001);
const server = http.createServer(app);

server.listen(process.env.PORT || 3001);