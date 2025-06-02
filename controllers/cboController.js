const cbos = require('../data/cbos.json');
const fs = require('fs');
const path = require('path');

const saveCbos = (data) => {
  fs.writeFileSync(
    path.join(__dirname, '../data/cbos.json'),
    JSON.stringify(data, null, 2)
  );
};

exports.getAll = (req, res) => {
  res.json(cbos);
};

exports.getByCodigo = (req, res) => {
  const { codigo } = req.params;
  const cbo = cbos.find(c => c.codigo === codigo);
  if (!cbo) {
    return res.status(404).json({ message: 'CBO não encontrado' });
  }
  res.json(cbo);
};

exports.createCbo = (req, res) => {
  const { codigo, titulo, descricao } = req.body;

  if (!codigo || !titulo || !descricao) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  const existe = cbos.find(c => c.codigo === codigo);
  if (existe) {
    return res.status(409).json({ message: 'CBO já cadastrado' });
  }

  const novoCbo = { codigo, titulo, descricao };
  cbos.push(novoCbo);
  saveCbos(cbos);

  res.status(201).json({ message: 'CBO cadastrado com sucesso', data: novoCbo });
};

exports.updateCbo = (req, res) => {
  const { codigo } = req.params;
  const { titulo, descricao } = req.body;

  const index = cbos.findIndex(c => c.codigo === codigo);
  if (index === -1) {
    return res.status(404).json({ message: 'CBO não encontrado' });
  }

  cbos[index] = {
    ...cbos[index],
    titulo: titulo || cbos[index].titulo,
    descricao: descricao || cbos[index].descricao
  };

  saveCbos(cbos);

  res.json({ message: 'CBO atualizado com sucesso', data: cbos[index] });
};

exports.deleteCbo = (req, res) => {
  const { codigo } = req.params;
  const index = cbos.findIndex(c => c.codigo === codigo);

  if (index === -1) {
    return res.status(404).json({ message: 'CBO não encontrado' });
  }

  const deletado = cbos.splice(index, 1);
  saveCbos(cbos);

  res.json({ message: 'CBO deletado com sucesso', data: deletado });
};
