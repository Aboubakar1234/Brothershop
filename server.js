const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


app.use(express.json()); // Pour analyser le corps des requêtes POST en JSON

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost', // L'hôte de votre base de données MySQL
  user: 'root', // Votre nom d'utilisateur MySQL
  password: 'Nourr@2005', // Votre mot de passe MySQL
  database: 'brothershop' // Le nom de votre base de données
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.post('/user', (req, res) => {
    const user = req.body;
  
    const sql = 'INSERT INTO user SET ?';
    db.query(sql, user, (err, result) => {
      if (err) throw err;
  
      console.log('User inserted into database');
      res.json({ id: result.insertId, ...user });
    });
  });