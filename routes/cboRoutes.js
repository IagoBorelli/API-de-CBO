const express = require('express');
const router = express.Router();
const cboController = require('../controllers/cboController');

router.get('/', cboController.getAll);
router.get('/:codigo', cboController.getOne);
router.post('/', cboController.create);
router.put('/:codigo', cboController.update);
router.delete('/:codigo', cboController.remove);

module.exports = router;
