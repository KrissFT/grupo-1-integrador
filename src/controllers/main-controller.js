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
    }
}
module.exports = controller;