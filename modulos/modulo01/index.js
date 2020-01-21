const express = require('express');

const server = express();

// Query params = ?id=1
// Route params = /users/1
// Request body = { "name": "Anderson", "email": "anderson@email.com" }

server.get('/users/:id', (req, res) => {
  const { id } = req.params;

  return res.json({ message: `Buscando o usuário ${id}` });
});

server.listen(3000);
