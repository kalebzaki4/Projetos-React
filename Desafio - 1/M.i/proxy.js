// proxy.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const response = await fetch('https://kalebzaki4.github.io/projetos-react/db.json');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os dados do servidor.' });
  }
};
