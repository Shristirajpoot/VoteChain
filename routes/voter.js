const express = require('express');
const router = express.Router();
const voterController = require('../controllers/voter');
router.post('/register', voterController.create);
router.post('/authenticate', voterController.authenticate);
router.post('/', voterController.getAll);
router.put('/:voterId', voterController.updateById);
router.delete('/:voterId', voterController.deleteById);
router.post('/resultMail', voterController.resultMail);
module.exports = router;
/*hi user */