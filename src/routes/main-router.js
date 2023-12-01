const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main-controller')

let url = '/api'

router.get("/", mainController.home);

router.get(url+'/', mainController.apiHome);

module.exports = router;