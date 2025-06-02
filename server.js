const express = require('express');
const app = express();
const port = 3000;

const cboRoutes = require('./routes/cboRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/', cboRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
