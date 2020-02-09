const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const favicon = require('serve-favicon');

//server settings
const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8001;

app.use(express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
  // console.log("In API server.");
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});
