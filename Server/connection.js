import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres', 
  host: 'db.wegwgkoatamiqusjcruz.supabase.co', 
  database: 'postgres', 
  password: 'Firlan@123.', 
  port:  5432, 
  max: 20,
  idleTimeoutMillis: 3000,
  connectionTimeoutMillis: 2000,
});

pool.connect((err) => {
  if (err) {
    console.error('Gagal terhubung ke database:', err);
  } else {
    console.log('Terhubung ke database Supabase!');
  }
});

export default pool;
