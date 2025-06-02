const express = require('express');
const router = express.Router();

const cboController = require('../controllers/cboController');
const authMiddleware = require('../middlewares/authMiddleware');

// 🔓 Rotas públicas
router.get('/cbos', cboController.getAll);
router.get('/cbos/:codigo', cboController.getByCodigo);

// 🔒 Rotas protegidas
router.post('/cbos', authMiddleware, cboController.createCbo);
router.put('/cbos/:codigo', authMiddleware, cboController.updateCbo);
router.delete('/cbos/:codigo', authMiddleware, cboController.deleteCbo);

module.exports = router;
