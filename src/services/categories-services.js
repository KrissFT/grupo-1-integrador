let db = require("../database/models/index")

const service = {
    listarCategorias:async () => {
        let categorias = await db.Categories.findAll({
            /* include: [{
                model: db.Products
            }] */
        })
        return categorias
    }
}

module.exports = service