//Question 1

const dns = require('dns');

const options = {
  all:true,
};
dns.lookup('www.miu.edu', options, (err, addresses) =>
  console.log(`miu.edu ip: ${JSON.stringify(addresses)}`));


//Question 2

const http = require('http')
const server = http.createServer();
const fs = require('fs');
const { response } = require('express');
const express = require('express');

server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/jpeg' });
  let image = fs.readFileSync('./big.png');
  res.end(image);
})

server.listen(3000, () => {
  console.log('listening on 3000')
});

