import pool from './connection.js';

const createTableQuery = `
 CREATE TABLE IF NOT EXISTS menu (
    id_menu SERIAL PRIMARY KEY,
    nama_menu VARCHAR(100) NOT NULL,
    harga DECIMAL(10, 2) NOT NULL,
    deskripsi TEXT,
    gambar VARCHAR(255)
);
`;

pool.query(createTableQuery)
  .then(() => {
    console.log('Tabel "users" berhasil dibuat atau sudah ada!');
    pool.end(); 
  })
  .catch((err) => {
    console.error('Error saat membuat tabel:', err);
    pool.end();
  });
