const jwt = require('jsonwebtoken');
const { secretKey } = require('../middlewares/authMiddleware');

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Usuário fixo de exemplo
  if (username === 'admin' && password === '123456') {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    return res.json({ token });
  } else {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }
};
