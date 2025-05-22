const express = require('express');
const app = express();
const PORT = 3000;

const cboRoutes = require('./routes/cboRoutes');

app.use(express.json());
app.use('/cbos', cboRoutes);

// Rota 404
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
