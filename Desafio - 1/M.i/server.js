const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Isso permite solicitações de qualquer origem

// Defina suas rotas aqui, por exemplo:
app.post('/m.i/proxy.js', (req, res) => {
  // Lógica para tratar a solicitação POST
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
