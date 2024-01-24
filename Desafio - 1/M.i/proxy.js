const fetch = require('node-fetch');

// Adicionando cabeçalhos CORS para todas as solicitações
const handleCors = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
};

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    // Lidar com solicitações OPTIONS
    handleCors(res);
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'POST') {
      const { action, email, password } = req.body;

      if (action === 'register') {
        // Registrar um novo usuário diretamente no GitHub
        const response = await fetch('https://raw.githubusercontent.com/seu-usuario/seu-repositorio/master/db.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ users: [...users, { email, password }] }),
        });

        if (response.ok) {
          res.status(200).json({ message: 'Usuário registrado com sucesso!' });
        } else {
          res.status(500).json({ error: 'Erro ao registrar o usuário.' });
        }
      } else if (action === 'login') {
        // Autenticar o usuário (se necessário)
        // ...
      } else {
        res.status(400).json({ error: 'Ação não suportada.' });
      }
    } else {
      // Lidar com outras solicitações (GET)
      handleCors(res);
      const response = await fetch('https://raw.githubusercontent.com/seu-usuario/seu-repositorio/master/db.json');
      const data = await response.json();
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter ou processar os dados do servidor.' });
  }
};
