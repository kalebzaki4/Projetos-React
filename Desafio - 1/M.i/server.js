const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Sua rota para manipular solicitações POST
app.post('/api/proxy', async (req, res) => {
  try {
    // Lógica para manipular a solicitação POST
    // ...

    res.status(200).json({ message: 'Sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao processar a solicitação.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
