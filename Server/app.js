// Import module 'http'
const http = require('http');

// Tentukan port dan hostname
const hostname = '127.0.0.1'; // Localhost
const port = 3000;

// Buat server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Status sukses
  res.setHeader('Content-Type', 'text/plain'); // Tipe konten
  res.end('Hello, this is a Node.js server!'); // Pesan respons
});

// Jalankan server
server.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}/`);
});