const path = require('path')
const categories = require("../services/categories-services")
let baseUrl = "http://localhost:3031"
let url = '/api'

const controller = {
    apiCategories: async (req,res) => {
        let categorias = await categories.listarCategorias()
        res.send(categorias)
    }
}
module.exports = controller;