const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main-controller')

let url = '/api'

router.get("/", mainController.home);

router.get(url+'/', mainController.apiHome);

router.get(url+'/productos', mainController.apiProducts);
router.get(url+'/productos'+'/:id', mainController.apiProductDetail);

router.post(url+'/productos', mainController.apiProductCreate);
router.put(url+'/productos'+'/:id',mainController.apiProductUpdate)
router.delete(url+'/productos'+'/:id', mainController.apiProductDelete)

module.exports = router;