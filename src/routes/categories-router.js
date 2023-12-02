const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories-controller')

let url = '/api'

router.get(url+'/categorias', categoriesController.apiCategories);

module.exports = router;