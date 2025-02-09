/* eslint-disable linebreak-style */
const fs = require('fs'); // pull in the system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const client2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const client3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getClient2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(client2);
  response.end();
};

const getClient3 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(client3);
  response.end();
};

module.exports = {
  getIndex,
  getClient2,
  getClient3,
};
