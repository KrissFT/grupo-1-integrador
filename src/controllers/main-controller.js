const path = require('path')
const products = require("../services/products-services")
let baseUrl = "http://localhost:3031"
let url = '/api'

const controller = {
    home: (req, res) => {
        let filepath = path.resolve(__dirname, '../views/home.html')
        res.sendFile(filepath)
        // res.redirect(url);
    },
    apiHome: (req,res) => {
        res.send({
            productos: baseUrl + url + "/productos",
        });
    },
    apiProducts: async (req,res) => {
        let panes = await products.listarPanes()
        res.send(panes);
    },
    apiProductDetail: async (req,res) => {
        const id = req.params.id;
        let panAEnviar = await products.buscarPan(id)
        res.send(panAEnviar || {});
    },
    apiProductCreate: async (req,res) => {
        await products.create(req.body)

        res.redirect("/api/productos")
    },
    apiProductUpdate: async (req,res) => {
        await products.update(req.body,req.params.id)

        res.redirect("/api/productos")
    },
    apiProductDelete: async (req,res) => {
        await products.delete(req.params.id)

        res.redirect("/api/productos")
    }
}
module.exports = controller;