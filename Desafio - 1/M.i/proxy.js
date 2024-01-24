// proxy.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    // Adicionando cabeçalhos CORS para solicitações OPTIONS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'POST') {
      // Se for uma solicitação POST, você pode processar os dados aqui
      const { email, password } = req.body;
      // Faça o que precisar com os dados de login

      // Exemplo: Adicionando o novo usuário ao db.json
      const response = await fetch('https://kalebzaki4.github.io/projetos-react/db.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Sucesso ao adicionar o usuário
        res.status(200).json({ message: 'Usuário adicionado com sucesso!' });
      } else {
        // Falha ao adicionar o usuário
        res.status(500).json({ error: 'Erro ao adicionar o usuário.' });
      }
    } else {
      // Se não for uma solicitação POST, obtenha dados do servidor
      const response = await fetch('https://kalebzaki4.github.io/projetos-react/db.json');
      const data = await response.json();
      // Adicionando cabeçalhos CORS para outras solicitações
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter ou processar os dados do servidor.' });
  }
};
