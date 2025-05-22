const cboService = require('../services/cboService');

module.exports = {
  getAll: (req, res) => {
    const { titulo } = req.query;
    const cbos = cboService.getAll(titulo);
    res.json(cbos);
  },

  getOne: (req, res) => {
    const cbo = cboService.getOne(req.params.codigo);
    if (cbo) return res.json(cbo);
    return res.status(404).json({ error: 'CBO não encontrado' });
  },

  create: (req, res) => {
    const { codigo, titulo, descricao } = req.body;
    if (!codigo || !titulo) return res.status(400).json({ error: 'Campos obrigatórios: codigo, titulo' });

    const novoCbo = cboService.create({ codigo, titulo, descricao });
    res.status(201).json(novoCbo);
  },

  update: (req, res) => {
    const atualizado = cboService.update(req.params.codigo, req.body);
    if (!atualizado) return res.status(404).json({ error: 'CBO não encontrado' });

    res.json(atualizado);
  },

  remove: (req, res) => {
    const removido = cboService.remove(req.params.codigo);
    if (!removido) return res.status(404).json({ error: 'CBO não encontrado' });

    res.json({ message: 'CBO removido com sucesso' });
  }
};
