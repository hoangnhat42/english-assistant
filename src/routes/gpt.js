const router = require('express').Router();
const gpt = require('../controllers/gpt');

router.post('/', gpt.gpt);

module.exports = router;