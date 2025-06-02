const jwt = require('jsonwebtoken');

const secretKey = 'seuSegredoSuperSecreto';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    jwt.verify(token, secretKey);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = authMiddleware;
module.exports.secretKey = secretKey;
