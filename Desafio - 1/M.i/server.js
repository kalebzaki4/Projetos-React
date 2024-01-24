const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Adicionando cabeçalhos CORS para todas as solicitações
const handleCors = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
};

app.post('/api/proxy', async (req, res) => {
  try {
    const { action, email, password } = req.body;

    if (action === 'register') {
      const response = await fetch('https://raw.githubusercontent.com/kalebzaki4/projetos-react/master/db.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ users: [{ email, password }] }),
      });

      if (response.ok) {
        res.status(200).json({ message: 'Usuário registrado com sucesso!' });
      } else {
        res.status(500).json({ error: 'Erro ao registrar o usuário.' });
      }
    } else if (action === 'login') {
      // Lógica de autenticação (se necessário)
      res.status(200).json({ message: 'Login bem-sucedido!' });
    } else {
      res.status(400).json({ error: 'Ação não suportada.' });
    }
  } catch (error) {
    console.error(error); // Adiciona o erro ao console
    res.status(500).json({ error: 'Erro ao processar a solicitação.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
